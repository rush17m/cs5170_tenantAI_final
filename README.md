# Tenant.AI Chatbot

This repository contains a **Retrieval-Augmented Generation (RAG) full-stack chatbot application** built with **Python, FastAPI, Redis, React and OpenAI's GPT-4o.** The chatbot specializes in answering questions about tenancy rights of the residents of Massachusetts.

## Structure

The repository is organized into two main folders:

- `backend/`: Contains the Python FastAPI backend code and a local Python version for testing.
- `frontend/`: Contains the React frontend code. It uses Vite.js as the build tool and bundler.

## Installation

### Prerequisites ✅

- Python 3.11+.
- Node.js 18+.
- Poetry (Python package manager).
- Redis Stack Server. Follow the [installation and running instructions](https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/). The application requires the RedisJSON and RediSearch modules, which Redis Stack Server includes. Alternatively, you can install Redis and add the required modules yourself.

### Backend

1. Navigate to the backend folder and install the Python dependencies using Poetry:

    ```bash
    cd backend
    poetry install
    ```

2. Create a `.env` file in the backend folder and set the required environment variable:
    - `OPENAI_API_KEY`: Your OpenAI API key.

### Frontend

1. Navigate to the frontend folder and install the JavaScript dependencies:

    ```bash
    cd frontend
    npm install
    ```

2. Create a `.env.development` file in the frontend folder and include the required environment variable:
    - `VITE_API_URL`: The URL to connect to the backend API.

## Running the Application

### Loading Source Documents

Make sure Redis Stack Server is running before executing the loading script:

```bash
cd backend
poetry run load
```

This script processes the documents in the `backend/data/docs` directory, creates vector embeddings, and stores them in the Redis database.


### Full-Stack Application

To run the full-stack chatbot application:

1. Ensure Redis Stack Server is running.
   
2. Activate the virtual environment for the backend and start the backend server:

    ```bash
    cd backend
    poetry shell
    fastapi dev app/main.py
    ```

3. In a separate terminal, start the frontend server:

    ```bash
    cd frontend
    npm run dev
    ```

4. Open your web browser and visit `http://localhost:3000` to access the application.