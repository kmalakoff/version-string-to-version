const assert = require('assert');

const toVersion = require('version-string-to-version');

describe('promise', () => {
  const root = typeof global !== 'undefined' ? global : window;
  let rootPromise;
  before(() => {
    rootPromise = root.Promise;
    root.Promise = require('pinkie-promise');
  });
  after(() => {
    root.Promise = rootPromise;
  });

  describe('happy path', () => {
    it('v12', async () => {
      const version = await toVersion('v12');
      assert.equal(version.slice(0, 4), 'v12.');
    });
    it('12', async () => {
      const version = await toVersion('12');
      assert.equal(version.slice(0, 4), 'v12.');
    });
    it('v0', async () => {
      const version = await toVersion('v0');
      assert.equal(version.slice(0, 3), 'v0.');
    });
    it('0', async () => {
      const version = await toVersion('0');
      assert.equal(version.slice(0, 3), 'v0.');
    });
    it('v12.0', async () => {
      const version = await toVersion('v12.0');
      assert.equal(version.slice(0, 6), 'v12.0.');
    });
    it('12.0', async () => {
      const version = await toVersion('12.0');
      assert.equal(version.slice(0, 6), 'v12.0.');
    });
    it('v12.1.0', async () => {
      const version = await toVersion('v12.1.0');
      assert.equal(version, 'v12.1.0');
    });
    it('12.1.0', async () => {
      const version = await toVersion('12.1.0');
      assert.equal(version, 'v12.1.0');
    });
    it('>=8', async () => {
      const version = await toVersion('>=8');
      assert.ok(version.length > 1);
    });
  });

  describe('unhappy path', () => {
    it('v0.0', async () => {
      try {
        await toVersion('v0.0');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('0.0', async () => {
      try {
        await toVersion('0.0');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('v0.0.0', async () => {
      try {
        await toVersion('v0.0.0');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('0.0.0', async () => {
      try {
        await toVersion('0.0.0');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('va.0.1', async () => {
      try {
        await toVersion('va.0.1');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('v12a.0.1', async () => {
      try {
        await toVersion('v12a.0.1');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('v12.b.1', async () => {
      try {
        await toVersion('v12.b.1');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('v12.0b.1', async () => {
      try {
        await toVersion('v12.0b.1');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('v12.0.c', async () => {
      try {
        await toVersion('v12.0.c');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
    it('v12.1.0c', async () => {
      try {
        await toVersion('v12.1.0c');
        assert.ok(false);
      } catch (err) {
        assert.ok(!!err);
      }
    });
  });
});
