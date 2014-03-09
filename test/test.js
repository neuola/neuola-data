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
    
    it('#save', function () {
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
      });
    });
    
    it('.findOne', function () {
      var q = model.Post.findOne({authorId: 'tester'});
      q.exec(function (err, post) {
        if (err) {
          throw new Error();
        }
        assert.ok(post);
        assert.equal('tester', post.authorId);
      });
    });
  });

});
