/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var tungus = require('tungus');
var os = require('os');

var model = require('../');
model('tingodb://' + os.tmpdir() + '/neuola-data-tingodb');