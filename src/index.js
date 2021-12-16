const express = require('express');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);

server.listen(process.env.PORT);

app.use(express.static(path.join(__dirname, '../public')));