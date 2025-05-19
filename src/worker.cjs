const NodeSemvers = require('node-semvers');
const isArray = Array.isArray || ((x) => Object.prototype.toString.call(x) === '[object Array]');

module.exports = function resolveVersion(versionString, options, callback) {
  NodeSemvers.load((err, semvers) => {
    if (err) return callback(err);
    const version = semvers.resolve(versionString, options);
    if ((isArray(version) && !version.length) || !version) return callback(new Error(`Version string invalid ${versionString}`));
    callback(null, version);
  });
};
