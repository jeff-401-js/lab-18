'use strict';

const app = require('../app/utils.js');
const logger = require('../logger/utilsLogger.js');

describe('uppercase', () => {
  it('should return a string uppercased', () => {
    let str = 'some test string';
    str = app.upper(str);
    expect(str).toEqual('SOME TEST STRING');
  });
});

describe('log save function', () => {
  it('should take in a message and console.log it', () => {
    let test = {
      name: 'saved',
      data: `SAVED: event just happened!`,
    };
    let spy = jest.spyOn(console, 'log');
    logger.logSave(JSON.stringify(test));
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

describe('log error function', () => {
  it('should take in a message and console.error it', () => {
    let test = {
      name: 'error',
      data: `ERROR: event just happened!`,
    };
    let spy = jest.spyOn(console, 'error');
    logger.logError(JSON.stringify(test));
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});