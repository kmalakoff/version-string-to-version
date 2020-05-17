var resolveVersion = require('./lib/resolveVersion');

module.exports = function versionStringToVersion(versionString, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};

  if (typeof callback === 'function') return resolveVersion(versionString, options, callback);
  return new Promise(function (resolve, reject) {
    versionStringToVersion(versionString, options, function (err, result) {
      err ? reject(err) : resolve(result);
    });
  });
};
