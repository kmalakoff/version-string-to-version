# version-string-to-version

Resolve a version string to a released Node.js version, or to all matching versions for a semver expression.

## Install

```sh
npm install version-string-to-version
```

```js
const toVersion = require('version-string-to-version');

toVersion('12', function (error, version) {
  if (error) throw error;
  console.log(version); // e.g. 'v12.22.12'
});

(async function () {
  const version = await toVersion('12');
  const versions = await toVersion('>=8');
  console.log(version, versions.length);
}());
```

An exact or partial version resolves to a string. A range such as `>=8` resolves to an array of matching released versions.
