/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var tungus = require('tungus');
var model = require('../');
var assert = require('assert');
var os = require('os');

describe('User', function () {

  it('#save()/verification', function (done) {
    var user = new model.User({
      _id: 'Tester',
      name: 'Tester Jack',
      password: 'Tester',
      email: 'tester@test.com'
    });
    user.save(function (err, doc) {
      if (err) {
        throw err;
      }
      assert.ok(doc);
      assert.notEqual(doc.password, 'Tester');
      done();
    });
  });
  
  it('#save()/reject-repeated', function (done) {
    var user = new model.User({
      _id: 'Tester',
      name: 'Tester Jack',
      password: 'Tester',
      email: 'tester@test.com'
    });
    user.save(function (err, doc) {
      if (err) {
        done();
      }
    });
  });
  
  it('#save()/trim', function (done) {
    var user = new model.User({
      _id: 'Tester    ',
      name: 'Tester Jack',
      password: 'Tester',
      email: 'tester@test.com'
    });
    user.save(function (err, doc) {
      if (err) {
        done();
      }
    });
  });
  
});