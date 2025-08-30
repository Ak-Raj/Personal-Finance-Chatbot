# Personal Finance AI Chatbot

This project is an intelligent chatbot that provides financial advice. It uses Google's Gemma model running in a Google Colab notebook as its backend, and a simple HTML/CSS/JS webpage as its frontend.

## How to Run This Project

1.  **Backend (Google Colab):**
    * Download the `Finance_Chatbot.ipynb` file and open it in Google Colab.
    * Add your Hugging Face and Ngrok tokens to the Colab Secrets.
    * Select the `T4 GPU` runtime (`Runtime` -> `Change runtime type`).
    * Run all the cells from top to bottom. The last cell will output a public `ngrok` URL. Copy this URL.

2.  **Frontend (Local Webpage):**
    * Download the `index.html`, `style.css`, and `script.js` files.
    * Open `script.js` in a code editor.
    * Paste the copied `ngrok` URL into the `backendUrl` variable at the top of the file (make sure to add `/ask` at the end).
    * Save the `script.js` file.
    * Open the `index.html` file in your web browser.

Now you can chat with your AI assistant through the webpage!
