var NodeSemvers = require('node-semvers');
var isArray = require('isarray');

module.exports = function resolveVersion(versionString, options, callback) {
  NodeSemvers.load({ cache: options.cache }, function (err, semvers) {
    if (err) return callback(err);
    var version = semvers.resolve(versionString, options);
    if ((isArray(version) && !version.length) || !version) return callback(new Error('Version string invalid ' + versionString));
    callback(null, version);
  });
};
