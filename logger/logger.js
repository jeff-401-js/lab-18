'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const utils = require('./utilsLogger.js');

socket.on('file-save', utils.logSave);
socket.on('file-error', utils.logError);