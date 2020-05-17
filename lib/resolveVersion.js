var NodeSemvers = require('node-semvers');
var isVersion = require('is-version');
var isArray = require('lodash.isarray');

module.exports = function resolveVersion(versionString, options, callback) {
  if (isVersion(versionString)) return callback(null, versionString);
  var version = 'v' + versionString;
  if (isVersion(version)) return callback(null, version);

  NodeSemvers.load({ cache: options.cache }, function (err, semvers) {
    if (err) return callback(err);
    var version = semvers.resolve(versionString, options);
    if ((isArray(version) && !version.length) || !version) return callback(new Error('Version string invalid ' + versionString));
    callback(null, version);
  });
};