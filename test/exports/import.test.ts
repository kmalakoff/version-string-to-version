import assert from 'assert';
import resolveVersion from 'version-string-to-version';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof resolveVersion, 'function');
  });
});
