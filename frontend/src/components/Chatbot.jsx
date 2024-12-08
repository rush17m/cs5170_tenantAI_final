import { useState } from 'react';
import { useImmer } from 'use-immer';
import api from '@/api';
import { parseSSEStream } from '@/utils';
import ChatMessages from '@/components/ChatMessages';
import ChatInput from '@/components/ChatInput';


// Chatbot component that handles user interaction and chat logic
function Chatbot() {

  // State for the current chat ID, list of messages, and new message input
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useImmer([]);
  const [newMessage, setNewMessage] = useState('');

  // Loading state based on the last message's loading status
  const isLoading = messages.length && messages[messages.length - 1].loading;

  async function submitNewMessage() {
    const trimmedMessage = newMessage.trim();
    if (!trimmedMessage || isLoading) return;

    // Add the user's message and a loading placeholder for the assistant's response
    setMessages(draft => [...draft,
      { role: 'user', content: trimmedMessage },
      { role: 'assistant', content: '', sources: [], loading: true }
    ]);
    setNewMessage('');

    let chatIdOrNew = chatId;
    try {
      if (!chatId) {
        const { id } = await api.createChat();
        setChatId(id);
        chatIdOrNew = id;
      }

      // Send the message to the chat API and handle the response as a stream
      const stream = await api.sendChatMessage(chatIdOrNew, trimmedMessage);
      for await (const textChunk of parseSSEStream(stream)) {
        setMessages(draft => {
          draft[draft.length - 1].content += textChunk;
        });
      }
      // Mark the loading message as completed
      setMessages(draft => {
        draft[draft.length - 1].loading = false;
      });
    } catch (err) {
      console.log(err);
      setMessages(draft => {
        draft[draft.length - 1].loading = false;
        draft[draft.length - 1].error = true;
      });
    }
  }

  // Render the chat UI
  return (
    <div className='relative grow flex flex-col gap-6 pt-6'>
      {messages.length === 0 && (
        <div className='mt-3 font-urbanist text-primary-black text-xl font-bold space-y-2'>
          <p>Hello! <br/>
          <br/> I'm a Bot here to guide you through accessing information about Tenants Rights in Massachusetts. I am powered by the latest housing laws and reports from the Massachusetts Law Reform Institute.
          <br/> <br/> I can not provide legal advice and no attorney-client relationship has been formed. For legal advice, please consult with an attorney.
          <br/><br/>  How can I help you today?<br/><br/><br/></p>
        </div>
      )}
      <ChatMessages
        messages={messages}
        isLoading={isLoading}
      />
      <ChatInput
        newMessage={newMessage}
        isLoading={isLoading}
        setNewMessage={setNewMessage}
        submitNewMessage={submitNewMessage}
      />
    </div>
  );
}

export default Chatbot;