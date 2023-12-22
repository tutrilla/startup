// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};

// Display messages we receive
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};

// If the webSocket is closed then disable the interface
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};

// Send a message over the webSocket
function sendMessage() {
  const msgEl = document.querySelector('#message-input');
  const msg = msgEl.value;

  if (!!msg) {
    const name = localStorage.getItem('userName');

    if (name) {
        appendMsg('me', name, msg);
        socket.send(`{"name":"${name}", "msg":"${msg}"}`);
        msgEl.value = '';
    } else {
        console.error('Username not found!');
    }

  }
}

// Create one long list of messages
function appendMsg(cls, from, msg) {
  const messageList = document.querySelector('#message-list');
  const listItem = document.createElement('li');
  listItem.className = `list-group-item ${cls}`;
  listItem.innerHTML = `<span class="font-weight-bold">${from}:</span> ${msg}`;
  messageList.appendChild(listItem);

  // Scroll to the bottom of the list
  messageList.scrollTop = messageList.scrollHeight;
}

// Send message on enter keystroke
const input = document.querySelector('#message-input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
