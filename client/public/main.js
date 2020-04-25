// This function adds messages to chat

$(function () {
	var socket = io();
	$("#chattyform").submit(function (e) {
		e.preventDefault();
		socket.emit("chat message", $("#m").val());
		$("#m").val("");
		return false;
	});

	socket.on("chat message", function (msg, time) {
		console.log("what time is it? ", time);
		console.log("The id is ", socket.id);
		console.log("the message is ", msg);

		$("#messages").prepend($("<li>").text(msg));
		$("#messages").prepend($("<li><small>").text(socket.id));
		$("#messages").prepend($("<li>").text(time));
	});
});

$(function () {
	var socket = io();
	let currentuser = window.localStorage.getItem("username");
	$("#loggyform").submit(function (e) {
		e.preventDefault();
		console.log("In main.js from local-top of funtion", currentuser);
		socket.emit("set user name", currentuser);

		$("#email").val("");
		return false;
	});

	socket.on("set user name", function (name) {
		console.log("In main.js from server?? ", name);
	});
});

// const chatForm = document.getElementById('chat-form');
// const chatMessages = document.querySelector('.chat-messages');
// const roomName = document.getElementById('room-name');
// const userList = document.getElementById('users');
// // const toUser = document.getElementById('toUser');
// const username = document.getElementById('email');
// const room = "Our Preschool";

// // Get username and room from URL
// // const { username, room } = Qs.parse(location.search, {
// //   ignoreQueryPrefix: true
// // });

// const socket = io();

// // Join chatroom
// socket.emit('joinRoom', { username, room });

// // Get room and users
// socket.on('roomUsers', ({ room, users }) => {
//   outputRoomName(room);
//   outputUsers(users);
// });

// // Message from server
// socket.on('message', message => {
//   console.log(message);
//   outputMessage(message);

//   // Scroll down
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// });

// // Message submit
// chatForm.addEventListener('submit', e => {
//   e.preventDefault();

//   // Get message text
//   const msg = e.target.elements.msg.value;

//   // Emit message to server
//   socket.emit('chatMessage', msg);

//   // Clear input
//   e.target.elements.msg.value = '';
//   e.target.elements.msg.focus();
// });

// // Output message to DOM
// function outputMessage(message) {
//   const div = document.createElement('div');
//   div.classList.add('message');
//   div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
//   <p class="text">
//     ${message.text}
//   </p>`
//   document.querySelector('.chat-messages').appendChild(div);

//   // console.log('This is sender: ', message.username);
//   // console.log('This is receiver: ', message.toUser);
// }

// // Add room name to DOM
// function outputRoomName(room) {
//   roomName.innerText = room;
// }

// // Add users to DOM
// function outputUsers(users) {
//   userList.innerHTML = `
//     ${users.map(user => `<li>${user.username}</li>`).join('')}
//   `;
// }
