'use strict';

//-------------------------------reader--------------------------------------//
const fs = require('fs');
const reader = (file, cb) => {
  fs.readFile(file, (err, data) => {
    if (err){
      cb (err);
    } else {
      cb(null, data.toString());
    }
  });
};

module.exports = reader;

