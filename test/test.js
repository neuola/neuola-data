/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var assert = require('assert');
var tungus = require('tungus');

describe('Models', function () {
  var model = require('../');
  model('tingodb:///local');

  it('#save', function () {
    var post = new model.Post();
    post.save(function (err, doc) {
      assert.ok(doc);
    });
  });

});
