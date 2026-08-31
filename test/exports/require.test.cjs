const assert = require('assert');
const resolveVersion = require('version-string-to-version');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof resolveVersion, 'function');
  });
});
