// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Promise from 'pinkie-promise';
import resolveVersion from './resolveVersion';

export default function versionStringToVersion(versionString, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};

  if (typeof callback === 'function') return resolveVersion(versionString, options, callback);
  return new Promise((resolve, reject) => {
    versionStringToVersion(versionString, options, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}
