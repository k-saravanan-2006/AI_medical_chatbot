from src.helper import text_chunks, embeddings
from langchain_community.vectorstores import Chroma

db = Chroma.from_documents(
    documents=text_chunks,
    embedding=embeddings,
    persist_directory="db"
)

print("✅ Chroma DB created")
