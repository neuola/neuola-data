/*globals describe, it, beforeEach */
/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var tungus = require('tungus');
var model = require('../');
var assert = require('assert');
var os = require('os');

describe('Catalog', function () {

  it('#save', function (done) {
    var catalog = new model.Catalog({
      _id: 'hello',
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
    var q = model.Catalog.findOne({_id: 'hello'});
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