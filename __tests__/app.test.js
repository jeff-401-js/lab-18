'use strict';

const utils = require('../app/utils.js');
const logger = require('../logger/utilsLogger.js');

jest.mock('fs');

describe('uppercase', () => {
  it('should return a string uppercased', () => {
    let str = 'some test string';
    str = utils.upper(str);
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

// describe('readFile', () => {
//   it('when given a bad file, returns an error', done => {
//     let files = ['bad.txt'];
//     return utils.readFile(files)
//       .then(err => {
//         expect(err).toBeDefined();
//         done();
//       });
//   });

//   it('when given a good file, returns file data', done => {
//     let files = ['test.txt'];
//     return utils.readFile(files)
//       .then(data => {
//         expect(data).toBeDefined();
//         done();
//       });
//   });
// });

// describe('writeFile', () => {
//   it('when given a bad file, throws error', done => {
//     let files = ['bad.txt'];
//     return utils.writeFile(files)
//       .then(err => {
//         expect(err).toBeDefined();
//         done();
//       });
//   });

//   it('when given a good file, writes', done => {
//     let files = ['test.txt'];
//     return utils.writeFile(files)
//       .then(data => {
//         expect(data).toBeDefined();
//         done();
//       });
//   });
// });