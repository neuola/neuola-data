/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var Schema = require('mongoose').Schema;

/**
 * The article schema.
 */
var PostSchema = new Schema({
  type: {type: Number, 'default': 0},
  author: String,
  catalog: {type: String, ref: 'Catalog'},
  tags: [String],
  title: String,
  content: String,
  date: {type: Date, 'default': Date.now}
});

var statics = PostSchema.statics;

/**
 * List latest posts by a range.
 *
 * @param {start: .., limit:..} structure.
 * @param cb the optional callback
 * @return mongoose#Query if cb is not specified.
 */
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

/**
 * List posts by a specific tag(s).
 *
 * @param tags the list of tags or a single tag.
 * @param param the {start: .., limit: ..} structure.
 * @return mongoose#Query
 */
statics.listByTags = function (tags, param, cb) {
  if (typeof tags == 'string') {
    tags = [tags];
  }
  var q = this.find({tags: {$all: tags}});
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

/**
 * List posts of a user by a specific tag(s).
 *
 * @param user the name of user.
 * @param tags the list of tags or a single tag.
 * @param param the {start: .., limit: ..} structure.
 * @return mongoose#Query
 */
statics.listByUserTags = function (user, tags, param, cb) {
  if (typeof tags == 'string') {
    tags = [tags];
  }
  var q = this.find({tags: {$all: tags}, author: user});
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
