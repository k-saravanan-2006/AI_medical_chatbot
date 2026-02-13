# 🩺 MediChat AI – Intelligent Medical Chatbot

---

## 📌 Overview

**MediChat AI** is an intelligent medical chatbot designed to assist users with general health-related queries.  

It leverages:

- 🧠 **LLaMA 2 (Local LLM)**
- 📚 **ChromaDB (Vector Database)**
- 📄 **Medical Knowledge PDF**
- 🌐 **Flask Web Interface**
- 🎨 **HTML, CSS, JavaScript Frontend**

The chatbot can answer medical questions using **Retrieval-Augmented Generation (RAG)** from a medical knowledge base.

---

## 🚀 Features

- 💬 Interactive Chat Interface
- 🧠 Local LLaMA 2 Model Integration
- 📚 Medical PDF Knowledge Retrieval
- 🔎 Semantic Search with ChromaDB
- ⚡ Fast Local Inference (GGML format)
- 🎨 Clean and Responsive UI

---

## 🏗️ Project Structure

AI-Medical-Chatbot/
│
├── data/
│ └── Medical_book.pdf
│
├── model/
│ ├── instruction.txt
│ ├── llama-2-7b-chat.ggmlv3...
│ └── llama-2-7b-chat.Q4_K_M...
│
├── research/
│ └── trials.ipynb
│
├── src/
│ ├── build_chroma.py
│ ├── chroma_db.py
│ ├── helper.py
│ └── prompt.py
│
├── static/
│ ├── script.js
│ └── style.css
│
├── templates/
│ └── chat.html
│
├── app.py
├── requirements.txt
├── setup.py
└── README.md


---

## ⚙️ How It Works

1. 📄 Medical PDF is processed and chunked  
2. 🔎 ChromaDB creates vector embeddings  
3. 💬 User asks a medical question  
4. 📚 Relevant medical context is retrieved  
5. 🧠 LLaMA 2 generates an accurate response  
6. 🌐 Response is displayed in the chat UI  

---

## 🛠️ Tech Stack

- Python  
- Flask  
- LLaMA 2 (GGML)  
- ChromaDB  
- HTML / CSS / JavaScript  

---

## ⚠️ Disclaimer

This chatbot is for educational purposes only.  
It does **not** replace professional medical advice.
