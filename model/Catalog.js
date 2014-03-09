/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var Schema = require('mongoose').Schema;

var catalogSchema = new Schema({
  name: String,
  description: String,
  id: String,
  modified: { type: Date, 'default': Date.now }
});

catalogSchema.index({ id: 1});

var statics = catalogSchema.statics;
var methods = catalogSchema.methods;

methods.listLatestPosts = function (param, cb) {
  var q = this.model('Post').find({ catalogId: this.id});
  if (param) {
    if (param.start) {
      q.skip(param.start);
    }
    if (param.limit) {
      q.limit(param.limit);
    }
  }
  q.sort({date: 'desc'});
  if (cb) {
    return q.exec(cb);
  } else {
    return q;
  }
};

statics.listRecentChanged = function (param, cb) {
  var q = this.find().sort('modified');
  if (param) {
    if (param.start) {
      q.skip(param.start);
    }
    if (param.limit) {
      q.limit(param.limit);
    }
  }
  q.sort({modified: 'desc'});
  if (cb) {
    return q.exec(cb);
  } else {
    return q;
  }
};


module.exports = catalogSchema;