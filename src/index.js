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

io.on('connection', (socket) => {
    console.log("connection detected...");
});