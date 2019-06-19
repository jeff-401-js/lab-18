'use strict';

/**
 * app module
 * @module app
 */

const fs = require('fs');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

/**
 * alterFile
   * @param {object} file - file to be altered
   * @desc alterFile function
   */

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, upper(data));
    })
    .catch(err => {
      let payload = {
        name: 'error',
        data: `ERROR: event just happened!`,
      };
      socket.emit('speak', JSON.stringify(payload));
    });
};

/**
 * readFile
   * @param {object} file - file to be read
   * @desc readFile function
   */

function readFile(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if(err) { 
        reject(err);
      }else{
        resolve(data.toString());
      }
    });
  });
}

/**
 * uppercase
   * @param {object} data - data to be uppercased
   * @desc uppercase function
   */
function upper(data){
  return data.toUpperCase();
}

/**
 * writeFile
   * @param {object} file - file be written
   * @param {object} text - to be transformed
   * @desc writeFile function
   */

function writeFile(file, text){
  return new Promise((resolve, reject) => {
    fs.writeFile(file, Buffer.from(text), (err, data) => {
      if(err) { 
        reject(err);
      }else{
        let payload = {
          name: 'saved',
          data: `SAVED: event just happened!`,
        };
        socket.emit('speak', JSON.stringify(payload));
      }
    });
  });
}

let savedMsg = (event) => {
  socket.emit('speak', JSON.stringify(payload));
};

function payload(event) {
  let payload = {
    name: event,
    data: `A ${event} event just happened!`,
  };

  return JSON.stringify(payload);
}

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = {readFile, writeFile, upper, payload};