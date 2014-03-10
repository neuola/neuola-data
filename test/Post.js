/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var tungus = require('tungus');
var model = require('../');
var assert = require('assert');
var os = require('os');

describe('Post', function () {

  it('#save()', function (done) {
    var post = new model.Post({
      author: 'tester',
      title: 'Hello',
      content: 'world!',
      catalog: 'hello'
    });
    post.save(function (err, doc) {
      if (err) {
        throw new Error(err);
      }
      assert.ok(doc);
      done();
    });
  });

  it('.findOne()', function (done) {
    var q = model.Post.findOne({author: 'tester'});
    q.exec(function (err, post) {
      if (err) {
        throw new Error();
      }
      assert.ok(post);
      assert.equal('tester', post.author);
      done();
    });
  });
  
  it('#catalog', function (done) {
    var q = model.Post.findOne({author: 'tester'});
    q.populate('catalog');
    q.exec(function (err, post) {
      if (err) {
        throw err;
      }
      assert.ok(typeof post.catalog == 'object');
      done();
    });
  });
});
