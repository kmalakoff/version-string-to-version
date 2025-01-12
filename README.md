## version-string-to-version

Convert a version string to a released Node.js version (by full or partial semver) or versions (by expression)

```
var assert = require('assert');
var toVersion = require('version-string-to-version');

// callback
toVersion('12', function (err, version) {
  assert.equal(version.slice(0, 4), 'v12.');
  done();
});
toVersion('>=8', function (err, version) {
  assert.ok(version.length > 1);
});

// promise
var version = await toVersion('12')
assert.equal(version.slice(0, 4), 'v12.');

var versions = await toVersion('>=8')
assert.ok(versions.length > 1);
```
