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
 * @see http://mongoosejs.com/docs/connections.html
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

// Define the model based on name convention.
function defineModel(name) {
  var schema = require('./model/' + name);
  model[name] = mongoose.model(name, schema);
  return model[name];
}

// The article model, belonged to one or more catalog.
defineModel('Post');

// The catalog model, containing articles.
defineModel('Catalog');

// The message model.
defineModel('Message');
