const messageInput = document.getElementById('messageInput');
const chatArea = document.querySelector('.chat-area');

// Auto-resize textarea
messageInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Handle Enter key to send
messageInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}

function appendMessage(sender, text) {
    const timeString = formatTime(new Date());
    let msgHTML = '';

    if (sender === 'user') {
        msgHTML = `
        <div class="message-row user-row">
            <div class="message-content user-message">
                <p>${text}</p>
            </div>
            <div class="avatar user-avatar"><i class="fa-regular fa-user"></i></div>
        </div>
        <div class="timestamp user-timestamp">${timeString}</div>
        `;
    } else {
        msgHTML = `
        <div class="message-row bot-row">
            <div class="avatar bot-avatar"><i class="fa-solid fa-stethoscope"></i></div>
            <div class="message-wrapper">
                <div class="message-content bot-message">
                    <p>${text}</p>
                </div>
            </div>
        </div>
        <div class="timestamp bot-timestamp">${timeString}</div>
        `;
    }

    chatArea.insertAdjacentHTML('beforeend', msgHTML);
    chatArea.scrollTop = chatArea.scrollHeight;
}

async function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto'; // Reset height

    // Add user message to UI
    appendMessage('user', text);

    // Send to backend
    const formData = new FormData();
    formData.append('msg', text);

    try {
        const response = await fetch('/get', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.text();
            appendMessage('bot', result);
        } else {
            console.error('Server responded with status:', response.status);
            appendMessage('bot', 'Error: Could not reach the server.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        appendMessage('bot', 'Error: Connection failed.');
    }
}
