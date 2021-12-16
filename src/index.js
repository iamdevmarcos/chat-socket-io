const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(process.env.PORT);

app.use(express.static(path.join(__dirname, '../public')));

let connectedUsers = [];

io.on('connection', (socket) => {
    console.log("connection detected...");

    socket.on('join-request', (username) => {
        socket.username = username;
        connectedUsers.push(username);
        console.log(connectedUsers);

        socket.emit('user-ok', connectedUsers);
    });
});