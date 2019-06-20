'use strict';

let logSave = payload => {
  let message = JSON.parse(payload.toString().trim());
  console.log(message);
};

let logError = payload => {
  let message = JSON.parse(payload.toString().trim());
  console.error(message);
};

module.exports = {logSave, logError};
