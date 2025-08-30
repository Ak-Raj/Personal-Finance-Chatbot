// IMPORTANT: MEE NGROK URL IKKADA PASTE CHEYANDI
const backendUrl = "https://c540d2d71ce3.ngrok-free.app/ask";

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // User message ni chat lo chupinchu
    appendMessage(userMessage, 'user-message');
    userInput.value = "";

    // Loading message chupinchu
    appendMessage("Thinking...", 'bot-message', true);

    // Backend ki call chey
    callBackend(userMessage);
}

function appendMessage(text, className, isLoading = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    if (isLoading) {
        messageDiv.id = 'loading-message';
    }
    const p = document.createElement('p');
    p.textContent = text;
    messageDiv.appendChild(p);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function callBackend(message) {
    try {
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: message,
                persona: "Professional" // Hardcoded for now, you can change this
            })
        });

        const data = await response.json();
        
        // Loading message ni remove chesi, asalu answer pettadam
        const loadingMessage = document.getElementById('loading-message');
        if (loadingMessage) {
            loadingMessage.querySelector('p').textContent = data.answer;
            loadingMessage.id = '';
        }

    } catch (error) {
        console.error("Error:", error);
        const loadingMessage = document.getElementById('loading-message');
        if (loadingMessage) {
            loadingMessage.querySelector('p').textContent = "Sorry, something went wrong. Please try again.";
            loadingMessage.id = '';
        }
    }
}