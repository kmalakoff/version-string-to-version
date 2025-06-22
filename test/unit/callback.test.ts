import assert from 'assert';

// @ts-ignore
import toVersion, { type VersionResult } from 'version-string-to-version';

describe('callback', () => {
  describe('happy path', () => {
    it('v12', (done) => {
      toVersion('v12', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version.slice(0, 4), 'v12.');
        done();
      });
    });
    it('12', (done) => {
      toVersion('12', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version.slice(0, 4), 'v12.');
        done();
      });
    });
    it('v0', (done) => {
      toVersion('v0', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version.slice(0, 3), 'v0.');
        done();
      });
    });
    it('0', (done) => {
      toVersion('0', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version.slice(0, 3), 'v0.');
        done();
      });
    });
    it('v12.0', (done) => {
      toVersion('v12.0', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version.slice(0, 6), 'v12.0.');
        done();
      });
    });
    it('12.0', (done) => {
      toVersion('12.0', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version.slice(0, 6), 'v12.0.');
        done();
      });
    });
    it('v12.1.0', (done) => {
      toVersion('v12.1.0', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version, 'v12.1.0');
        done();
      });
    });
    it('12.1.0', (done) => {
      toVersion('12.1.0', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.equal(version, 'v12.1.0');
        done();
      });
    });
    it('>=8', (done) => {
      toVersion('>=8', (err?: Error, version?: VersionResult[]): undefined => {
        if (err) {
          done(err.message);
          return;
        }
        assert.ok(version.length > 1);
        done();
      });
    });
  });

  describe('unhappy path', () => {
    it('v0.0', (done) => {
      toVersion('v0.0', (err) => {
        assert.ok(!!err);
        done();
      });
    });
    it('0.0', (done) => {
      toVersion('0.0', (err) => {
        assert.ok(!!err);
        done();
      });
    });
    it('v0.0.0', (done) => {
      toVersion('v0.0.0', (err, _version) => {
        assert.ok(!!err);
        done();
      });
    });
    it('0.0.0', (done) => {
      toVersion('0.0.0', (err, _version) => {
        assert.ok(!!err);
        done();
      });
    });
    it('va.0.1', (done) => {
      toVersion('va.0.1', (err) => {
        assert.ok(!!err);
        done();
      });
    });
    it('v12a.0.1', (done) => {
      toVersion('v12a.0.1', (err) => {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.b.1', (done) => {
      toVersion('v12.b.1', (err) => {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.0b.1', (done) => {
      toVersion('v12.0b.1', (err) => {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.0.c', (done) => {
      toVersion('v12.0.c', (err) => {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.1.0c', (done) => {
      toVersion('v12.1.0c', (err) => {
        assert.ok(!!err);
        done();
      });
    });
  });
});
