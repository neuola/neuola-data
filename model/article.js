var Schema = require('mongoose').Schema;

/**
 * The article schema.
 */
var ArticleSchema = new Schema({
  type: Number,
  title: Number,
  author: String,
  tags: [String],
  content: String
});

module.exports = ArticleSchema;
