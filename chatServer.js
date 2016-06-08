'use strict';

class ChatServer {
	constructor(io) {
		this.io = io;
	}

	start() {
		var io = this.io;
		console.log('Starting socket.io chat server');

		io.on('connection', (socket) => {
			console.log('User connected');
			socket.on('join', (user) => {

					console.log('User join');
					socket.on('chat', function(payload) {
						console.log(payload);

						io.emit('chat', payload);
					});
			});

		});
	}
}

module.exports = ChatServer;
