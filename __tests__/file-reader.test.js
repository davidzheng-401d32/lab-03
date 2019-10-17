'use strict';

jest.mock('fs');

const fileReaderCallBack = require('../lib/file-reader-callback.js');


describe('Testing file reader module', () => {
//----------------------------bad path for call back------------------------------------//
  it('Throws err when bad file path is given', (done) => {
    let file = `${__dirname}../data/bad.txt`;
    fileReaderCallBack(file, (err, data) => {
      expect(err).toBeDefined();
      expect(data).not.toBeDefined();
      expect(err).toEqual('Invalid File');
      done();
    });
  });
  //---------------------------good path for call back--------------------------------------//
  it('no err when good path is given', (done) => {
    let file = `${__dirname}../data/person.json`;
    fileReaderCallBack(file, (err, data) => {
      expect(err).toBe(null);
      expect(data).toBeDefined();
      done();
    });
  });
});
