/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true */
'use strict';

var mongoose = require('mongoose');

/**
 * The message schema.
 */
var messageSchema = new mongoose.Schema({
  from: String,
  to: String,
  title: String,
  body: String,
  date: {type: Date, 'default': Date.now},
  read: Boolean
});

// Set the index of `from` and `to`.
messageSchema.index({ from: 1, to: 1 });

var statics = messageSchema.statics;

statics.listLatestMessages = function (from, to, param, cb) {
  var q = this.find({ from: from, to: to });
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

statics.listBySender = function (from, param, cb) {
  if (!param) {
    param = { start: 0 };
  }
  var q = this.find({ from: from });
  if (param.start) {
    q.skip(param.start);
  }
  if (param.limit) {
    q.limit(param.limit);
  }
  q.sort({date: 'desc'});
  if (cb) {
    return q.exec(cb);
  } else {
    return q;
  }
};

statics.listByReceiver = function (to, param, cb) {
  if (!param) {
    param = {start: 0};
  }
  var q = this.find({to: to});
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

module.exports = messageSchema;
