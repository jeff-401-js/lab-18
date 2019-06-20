'use strict';

/**
 * app module
 * @module app
 */

// const fs = require('fs');
const utils = require('./utils.js');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

/**
 * alterFile
   * @param {object} file - file to be altered
   * @desc alterFile function
   */

const alterFile = (file) => {
  utils.readFile(file)
    .then(data => {
      utils.writeFile(file, utils.upper(data));
    })
    .then(emit => {
      let payload = {
        name: 'saved',
        data: `SAVED: event just happened!`,
      };
      socket.emit('file-save', JSON.stringify(payload));
    })
    .catch(err => {
      let payload = {
        name: 'error',
        data: `ERROR: event just happened!`,
      };
      socket.emit('file-error', JSON.stringify(payload));
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);

