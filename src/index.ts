import worker from './worker.cjs';

export default function versionStringToVersion(versionString, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};

  if (typeof callback === 'function') return worker(versionString, options, callback);
  return new Promise((resolve, reject) => worker(versionString, options, (err, result) => (err ? reject(err) : resolve(result))));
}
