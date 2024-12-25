const assert = require('assert');

const toVersion = require('version-string-to-version');

describe('promise', () => {
  describe('happy path', () => {
    it('v12', (done) => {
      toVersion('v12')
        .then((version) => {
          assert.equal(version.slice(0, 4), 'v12.');
          done();
        })
        .catch(done);
    });
    it('12', (done) => {
      toVersion('12')
        .then((version) => {
          assert.equal(version.slice(0, 4), 'v12.');
          done();
        })
        .catch(done);
    });
    it('v0', (done) => {
      toVersion('v0')
        .then((version) => {
          assert.equal(version.slice(0, 3), 'v0.');
          done();
        })
        .catch(done);
    });
    it('0', (done) => {
      toVersion('0')
        .then((version) => {
          assert.equal(version.slice(0, 3), 'v0.');
          done();
        })
        .catch(done);
    });
    it('v12.0', (done) => {
      toVersion('v12.0')
        .then((version) => {
          assert.equal(version.slice(0, 6), 'v12.0.');
          done();
        })
        .catch(done);
    });
    it('12.0', (done) => {
      toVersion('12.0')
        .then((version) => {
          assert.equal(version.slice(0, 6), 'v12.0.');
          done();
        })
        .catch(done);
    });
    it('v12.1.0', (done) => {
      toVersion('v12.1.0')
        .then((version) => {
          assert.equal(version, 'v12.1.0');
          done();
        })
        .catch(done);
    });
    it('12.1.0', (done) => {
      toVersion('12.1.0')
        .then((version) => {
          assert.equal(version, 'v12.1.0');
          done();
        })
        .catch(done);
    });
    it('>=8', (done) => {
      toVersion('>=8')
        .then((version) => {
          assert.ok(version.length > 1);
          done();
        })
        .catch(done);
    });
  });

  describe('unhappy path', () => {
    it('v0.0', (done) => {
      toVersion('v0.0')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('0.0', (done) => {
      toVersion('0.0')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('v0.0.0', (done) => {
      toVersion('v0.0.0')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('0.0.0', (done) => {
      toVersion('0.0.0')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('va.0.1', (done) => {
      toVersion('va.0.1')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('v12a.0.1', (done) => {
      toVersion('v12a.0.1')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.b.1', (done) => {
      toVersion('v12.b.1')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.0b.1', (done) => {
      toVersion('v12.0b.1')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.0.c', (done) => {
      toVersion('v12.0.c')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.1.0c', (done) => {
      toVersion('v12.1.0c')
        .then(() => {
          assert.ok(false);
        })
        .catch((err) => {
          assert.ok(!!err);
          done();
        });
    });
  });
});
