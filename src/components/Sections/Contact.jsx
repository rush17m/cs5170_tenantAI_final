/**
 * this component serves as the chatbot placeholder until chat functionality is merged with this React project
 */

import React from "react";
import styled from "styled-components";


export default function Contact() {
  return (
    <Wrapper id="contact">
      <ChatHeader>
        <h2>🤖 TenantAI Chatbot</h2>
      </ChatHeader>
      <ChatBody>
        <WelcomeMessage>
          <h3>👋 Welcome!</h3>
          <p> I'm a Bot here to guide you through accessing information about Tenants Rights in Massachusetts. I am powered by the latest housing laws and reports from the Massachusetts Law Reform Institute.</p>
          <p>I can not provide legal advice and no attorney-client relationship has been formed. For legal advice, please consult with an attorney.</p>
          <p>How can I help you today?</p>
        </WelcomeMessage>
      </ChatBody>
      <ChatInputWrapper>
        <ChatInput placeholder="Type your message here..." />
        <SendButton>➤</SendButton>
      </ChatInputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 1000px;
  max-width: 90%;
  margin: 200px auto;
  height: 600px; /* Add height property to make the box taller */
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;


const ChatHeader = styled.div`
  background: #7620ff;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  h3 {
    font-size: 22px;
    color: #333;
  }
  p {
    font-size: 16px;
    color: #555;
    margin: 10px 0;
  }
`;

const ChatInputWrapper = styled.div`
  display: flex;
  border-top: 1px solid #e0e0e0;
  background: #fff;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 30px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
`;

const SendButton = styled.button`
  padding: 15px 20px;
  background: #7620ff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  :hover {
    background: #0056b3;
  }
`;
