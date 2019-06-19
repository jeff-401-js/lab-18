'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let logSave = payload => {
  let message = JSON.parse(payload.toString().trim());
  console.log(message);
};

let logError = payload => {
  let message = JSON.parse(payload.toString().trim());
  console.error(message);
};

socket.on('file-save', logSave);
socket.on('file-error', logError);