from langchain_community.vectorstores import Chroma
from src.helper import embeddings

docsearch = Chroma(
    persist_directory="db",
    embedding_function=embeddings
)
