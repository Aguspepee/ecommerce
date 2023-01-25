let connectedClients = [];

const onConnection = (socket) => {
    console.log('a user connected');
    connectedClients.push(socket);
    socket.on('disconnect', onDisconnect);
}

const onDisconnect = (socket) => {
    console.log('a user disconnected');
    connectedClients = connectedClients.filter(client => client !== socket);
}

const emitEvent = (event, data) => {
    connectedClients.forEach(client => client.emit(event, data));
}

const broadcastMessage = (req, res, socket) => {
    const message = req.body.message;
    socket.broadcast.emit('new-message', message);
    res.send('Message broadcasted to all clients!');
}

module.exports = { onConnection, onDisconnect, emitEvent, broadcastMessage }
