# Smart Chatbot with Knowledge Base

TCM is a comprehensive knowledge base and chatbot platform that allows users to upload documentation and retrieve relevant information through an AI-powered chatbot. The system utilizes pgvector for vector-based document storage with PGVector, MongoDB for chat history, and a FastAPI backend integrated with LangChain for intelligent responses.


## Full Repo Links

 - [Chatbot](https://github.com/yuanqinong/tcm-chatbot)
 - [Backend](https://github.com/yuanqinong/tcm_backend )
 - [Knowledge Base Management Dashboard](https://github.com/yuanqinong/tcm_dashboard)

## Demo

![demo](https://github.com/user-attachments/assets/e83d9e1d-189f-4461-a8d8-c86b41ffa0c6)


## Features

- 📁 Document Upload Dashboard - Supports batch uploads (PDF, DOCX, EXCEL, TXT, URLs) for knowledge base.
- 🔎 AI-Powered Chatbot - Retrieves and summarizes answers using a vector search mechanism.
- 🧠 LangChain Integration - Tool calling, RAG (Retrieval-Augmented Generation), and function-based interactions.
- 🗃️ Vector Database (pgvector) - Efficient document retrieval using embeddings.
- 🛡️ Secure Authentication (JWT) - Session management for user authentication.
- 📊 Real-time Syncing – Ensures up-to-date knowledge base data.


## Tech Stack

**Frontend:** React, Material UI

**Server:** FastAPI

**Database:** MongoDB, Postgresql (PGCector)

**LLM Model:** LLama3.1, LLama Vision

**Deployment:** Docker
