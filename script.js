const sidebarUsers = document.querySelectorAll('.sidebar__user');
const chatHeaderName = document.getElementById('chatHeaderName');
const chatMessages = document.getElementById('chatMessages');
const messageForm = document.getElementById('messageForm');
const sendMessageInput = document.querySelector('.sendMessage');


const users = {
  Anant: {
    name: "Anant",
    avatar: "assets/user1.jpg",
    messages: ["Hey!", "How are you?"]
  },
  Khushi: {
    name: "Khushi",
    avatar: "assets/user2.jpg",
    messages: ["Hi there!", "What's up?"]
  },
  Sidharth: {
    name: "Sidharth",
    avatar: "assets/user3.jpg",
    messages: ["Hello!", "Long time no see!"]
  }
};

sidebarUsers.forEach(userElement => {
  userElement.addEventListener('click', (e) => {
    const userName = e.target.closest('.sidebar__user').id;
    loadChat(userName);
  });
});

function loadChat(userName) {
  
  chatHeaderName.textContent = users[userName].name;


  chatMessages.innerHTML = '';

 
  users[userName].messages.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    const avatar = document.createElement('img');
    avatar.src = users[userName].avatar;

    const messageInfo = document.createElement('div');
    messageInfo.className = 'message__info';

    const userInfo = document.createElement('h4');
    userInfo.innerHTML = `${users[userName].name} <span class="message__timestamp">${new Date().toLocaleDateString()}</span>`;

    const messageText = document.createElement('p');
    messageText.textContent = message;

    messageInfo.appendChild(userInfo);
    messageInfo.appendChild(messageText);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageInfo);
    chatMessages.appendChild(messageDiv);
  });
}


messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const messageText = sendMessageInput.value.trim();
  if (messageText) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    const avatar = document.createElement('img');
    avatar.src = "assets/user4.jpg";  

    const messageInfo = document.createElement('div');
    messageInfo.className = 'message__info';

    const userInfo = document.createElement('h4');
    userInfo.innerHTML = `Sujal <span class="message__timestamp">${new Date().toLocaleDateString()}</span>`;

    const messageTextNode = document.createElement('p');
    messageTextNode.textContent = messageText;

    messageInfo.appendChild(userInfo);
    messageInfo.appendChild(messageTextNode);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageInfo);
    chatMessages.appendChild(messageDiv);

    
    sendMessageInput.value = '';
  }
});
