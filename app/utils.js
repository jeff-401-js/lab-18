'use strict';

const fs = require('fs');

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
        resolve();
      }
    });
  });
}

module.exports = {readFile, writeFile, upper};