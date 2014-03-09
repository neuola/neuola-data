/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var tungus = require('tungus');
var model = require('../');
var assert = require('assert');
var os = require('os');

describe('Post', function () {

  it('#save', function (done) {
    var post = new model.Post({
      authorId: 'tester',
      title: 'Hello',
      content: 'world!',
      catalog: 'greet'
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
  
  it('#catalog', function (done) {
    var q = model.Post.findOne({authorId: 'tester'});
    q.populate('catalog');
    q.exec(function (err, post) {
      if (err) {
        throw err;
      }
      console.log(post.catalog);
      assert.ok(typeof post.catalog == 'object');
      done();
    });
  });
});