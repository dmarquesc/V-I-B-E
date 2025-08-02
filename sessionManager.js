// sessionManager.js — Real-Time Collaboration & Session Presence

const collaborators = ['Jay 🎤', 'Ramzi 🎧', 'Hollywood 💃'];
const presenceList = document.getElementById('presenceList');
const chatBox = document.getElementById('liveChatBox');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendChat');

// Show current collaborators
function updatePresence() {
  presenceList.innerHTML = '';
  collaborators.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name + ' is online';
    presenceList.appendChild(li);
  });
}

// Add message to live chat
function appendChatMessage(sender, message) {
  const msg = document.createElement('p');
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    appendChatMessage('You', message);
    chatInput.value = '';
  }
});

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  updatePresence();
  appendChatMessage('System', 'Welcome to the V.I.B.E. session!');
});
