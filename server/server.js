'use strict';

const io = require('socket.io')(3000);

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);
  socket.on('file-save', payload => {
    socket.broadcast.emit('file-save', payload);
  });
});

io.on('connection', socket => {
  console.log(`Connected socket id: ${socket.id}`);
  socket.on('file-error', payload => {
    socket.broadcast.emit('file-error', payload);
  });
});