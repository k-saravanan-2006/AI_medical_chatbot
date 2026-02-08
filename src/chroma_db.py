from langchain_community.vectorstores import Chroma
from src.helper import text_chunks, embeddings


persist_directory = "db"   # local folder

docsearch = Chroma.from_texts(
    texts=[t.page_content for t in text_chunks],
    embedding=embeddings,
    persist_directory=persist_directory
)

docsearch.persist()