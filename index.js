/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

/*!
The data layer for Neuola.
===========================

Most of the models are based on the structure defined by Mongoose.js ODM.
This is the entrance of the module.

@author yfwz100
*/

var mongoose = require('mongoose');

/**
 * The exported configuration function. It's a wrapper around mongoose.connect() but the settings can be written in a parameter, like
 *
 * {
 *   uri: ... ,
 *   user: ... ,
 *   pass: ...
 * }
 *
 * @param uri the URI parameter which conforms mongoose.js' connect() method.
 *
 * @see http://mongoosejs.com/docs/connections.html
 * @return model itself.
 */
function model(uri, config) {
  if (config) {
    config = uri;
    uri = config.uri;
  }
  mongoose.connect(uri, config);
  return model;
}
module.exports = model;

/**
 * Define the model based on name convention.
 *
 * @param name the name of the model.
 */
function defineModel(name) {
  var schema = require('./model/' + name);
  model[name] = mongoose.model(name, schema);
  return model[name];
}

/**
 * The `Post` model.
 * Post is defined to represent many types, including Articles, Photos et al. A post belonged to one or more catalog. The type of post is defined via the type attribute.
 */
defineModel('Post');

/**
 * The `Catalog` model.
 * A catalog manages one or more posts.
 */
defineModel('Catalog');

/**
 * The `Message` model.
 * A message is defined like a email or letter. It contains a message between users.
 */
defineModel('Message');

/**
 * The `User` model.
 * A user is the people interacted with the system.
 */
defineModel('User');