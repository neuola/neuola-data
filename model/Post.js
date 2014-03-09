/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var Schema = require('mongoose').Schema;

/**
 * The article schema.
 */
var PostSchema = new Schema({
  type: {type: Number, 'default': 0},
  authorId: String,
  catalogId: {type: String, ref: 'Catalog'},
  tags: [String],
  title: String,
  content: String,
  date: {type: Date, 'default': Date.now}
});

var statics = PostSchema.statics;

statics.listLatestPosts = function (param, cb) {
  var q = this.find();
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

module.exports = PostSchema;
