'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

let logMessage = payload => {
  let message = JSON.parse(payload.toString().trim());
  if(message.name === 'error'){
    console.error(message);
  }else if(message.name === 'saved'){
    console.log(message);
  }else{
    console.log('neither error or saved');
  }
};

socket.on('message', logMessage);