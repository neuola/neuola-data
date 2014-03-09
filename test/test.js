/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var assert = require('assert');
var tungus = require('tungus');
var os = require('os');

describe('Models', function () {
  var model = require('../');
  model('tingodb://' + os.tmpdir() + '/neuola-data-tingodb');

  describe('Post', function () {
    
    it('#save', function (done) {
      var post = new model.Post({
        authorId: 'tester',
        title: 'Hello',
        content: 'world!'
      });
      post.save(function (err, doc) {
        if (err) {
          throw new Error(err);
        }
        assert.ok(doc);
        done();
      });
    });
    
    it('.findOne', function (done) {
      var q = model.Post.findOne({authorId: 'tester'});
      q.exec(function (err, post) {
        if (err) {
          throw new Error();
        }
        assert.ok(post);
        assert.equal('tester', post.authorId);
        done();
      });
    });
  });
  
  describe('Catalog', function () {
    
    it('#save', function (done) {
      var catalog = new model.Catalog({
        id: 'hello',
        name: 'Greeting Topic',
        description: 'The topic to discuss how to greet.'
        
      });
      catalog.save(function (err, doc) {
        if (err) {
          throw err;
        }
        assert.ok(doc);
        done();
      });
    });
    
    it('.findOne', function (done) {
      var q = model.Catalog.findOne({id: 'hello'});
      q.exec(function (err, catalog) {
        if (err) {
          throw err;
        }
        assert.ok(catalog);
        assert.equal('hello', catalog.id);
        done();
      });
    });
  });
  
  describe('Message', function () {
    
    it('#save', function (done) {
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
    
    it('.findOne', function (done) {
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
  });

});
