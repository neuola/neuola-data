/*jslint eqeq: true, indent: 2, node: true, plusplus: true, regexp: true, unparam: true, vars: true, nomen: true */
'use strict';

var Schema = require('mongoose').Schema;
var passwordHash = require('password-hash');

/**
 * The User schema.
 */
var UserSchema = new Schema({
  _id: {type: String, trim: true},
  name: String,
  password: {type: String, required: true},
  email: {type: String, required: true},
  time: {type: Date, 'default': Date.now}
});

/**
 * Encypt the password with SHA1 algorithm.
 */
UserSchema.post('validate', function (doc) {
  doc.password = passwordHash.generate(doc.password);
});

/**
 * Simplify the verification of password.
 */
UserSchema.method('verifyPassword', function (password) {
  return passwordHash.verify(password, this.password);
});

module.exports = UserSchema;