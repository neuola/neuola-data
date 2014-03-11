/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var tungus = require('tungus');
var model = require('../');
var assert = require('assert');
var os = require('os');

describe('Message', function () {

  it('#save()', function (done) {
    var msg = new model.Message({
      from: 'Tester',
      to: 'All',
      title: 'Hello, Tester!',
      content: 'Welcome to the testing world!'
    });
    msg.save(function (err, doc) {
      if (err) {
        throw err;
      }
      assert.ok(doc);
      done();
    });
  });

  it('.findOne()', function (done) {
    var q = model.Message.findOne({to: 'All'});
    q.exec(function (err, msg) {
      if (err) {
        throw err;
      }
      assert.ok(msg);
      assert.equal('Tester', msg.from);
      done();
    });
  });

  it('.listLatestMessages()', function (done) {
    var q = model.Message.listLatestMessages('Tester');
    q.exec().then(function (messages) {
      assert.ok(messages);
      messages.forEach(function (msg) {
        assert.ok('Tester' == msg.from || 'Tester' == msg.to);
      });
      done();
    }, function (err) {
      throw err;
    });
  });

  it('.listByReceiver()', function (done) {
    var q = model.Message.listByReceiver('All');
    q.exec().then(function (messages) {
      assert.ok(messages);
      messages.forEach(function (msg) {
        assert.equal('All', msg.to);
      });
      done();
    }, function (err) {
      throw err;
    });
  });

  it('.listBySender()', function (done) {
    var q = model.Message.listBySender('Tester');
    q.exec().then(function (messages) {
      assert.ok(messages);
      messages.forEach(function (msg) {
        assert.equal('Tester', msg.from);
      });
      done();
    }, function (err) {
      throw err;
    });
  });
});
