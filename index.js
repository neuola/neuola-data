/*!
The data layer for Neuola.
===========================

Most of the models are based on the structure defined by Mongoose.js ODM.
This is the entrance of the module.

@author yfwz100
*/

var mongoose = require('mongoose');

// Create the model based on name convention.
function model(name) {
  var schema = require('./model/' + name);
  return mongoose.model(name, schema);
}

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
module.exports = function (uri, config) {
  if (config) {
    config = uri;
    uri = config.uri;
  }
  mongoose.connect(uri, config);
};

// The article model, belonged to one or more catalog.
module.exports.Article = model('article');

// The catalog model, containing articles.
module.exports.Catalog = model('catalog');

// The message model.
module.exports.Message = model('message');
