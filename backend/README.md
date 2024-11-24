# Tenant.AI Chatbot Backend

## Code Structure
```
backend/
├── app/
│   ├── assistants/
│   │   ├── assistant.py     # Main assistant class for API
│   │   ├── local-assistant.py   # Assistant class for local console app
│   │   ├── prompts.py       # Assistant prompts
│   │   └── tools.py         # Contains the assistant's QueryKnowledgeBaseTool
│   │
│   ├── utils/
│   │   ├── splitter.py      # Text splitter utility
│   │   └── sse_stream.py    # SSEStream class for server-sent events
│   │
│   ├── api.py              # FastAPI endpoints
│   ├── config.py           # Pydantic Settings configuration
│   ├── db.py               # Redis database code
│   ├── export.py           # Utility to export all chats to JSON
│   ├── loader.py           # Document processing and knowledge base loading
│   ├── main.py             # Main FastAPI application
│   └── openai.py           # OpenAI API functions
│
└── pyproject.toml          # Project dependencies and configuration
```
