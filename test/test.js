/*globals describe, it, before */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var tungus = require('tungus');
var os = require('os');

var dbPath = os.tmpdir() + '/neuola-data-tingodb';

// Clean the directory before test.
before(function () {
  var fs = require('fs');
  var files = fs.readdirSync(dbPath);
  files.forEach(function (file) {
    fs.unlinkSync(dbPath + '/' + file);
  });
});

var model = require('../');
model('tingodb://' + dbPath);
