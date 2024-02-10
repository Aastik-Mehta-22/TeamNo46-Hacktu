const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();

    if (message !== '') {
        appendMessage('user', message);
        userInput.value = '';
        // Here you would typically send the user's message to a backend for processing
        // and receive a response that you can then display using appendMessage('bot', response)
        simulateBotResponse(message);
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function simulateBotResponse(userMessage) {
    // Here you would implement the logic to generate a response based on the user's message
    // For simplicity, let's just echo back the user's message
    const botResponse = `You said: "${userMessage}"`;
    setTimeout(() => appendMessage('bot', botResponse), 500);
}
