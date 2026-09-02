var assert = require('assert');

var toVersion = require('../..');

describe('promise', function () {
  if (typeof Promise === 'undefined') return; // no promise support

  describe('happy path', function () {
    it('v12', function (done) {
      toVersion('v12')
        .then(function (version) {
          assert.equal(version.slice(0, 4), 'v12.');
          done();
        })
        .catch(done);
    });
    it('12', function (done) {
      toVersion('12')
        .then(function (version) {
          assert.equal(version.slice(0, 4), 'v12.');
          done();
        })
        .catch(done);
    });
    it('v0', function (done) {
      toVersion('v0')
        .then(function (version) {
          assert.equal(version.slice(0, 3), 'v0.');
          done();
        })
        .catch(done);
    });
    it('0', function (done) {
      toVersion('0')
        .then(function (version) {
          assert.equal(version.slice(0, 3), 'v0.');
          done();
        })
        .catch(done);
    });
    it('v12.0', function (done) {
      toVersion('v12.0')
        .then(function (version) {
          assert.equal(version.slice(0, 6), 'v12.0.');
          done();
        })
        .catch(done);
    });
    it('12.0', function (done) {
      toVersion('12.0')
        .then(function (version) {
          assert.equal(version.slice(0, 6), 'v12.0.');
          done();
        })
        .catch(done);
    });
    it('v12.1.0', function (done) {
      toVersion('v12.1.0')
        .then(function (version) {
          assert.equal(version, 'v12.1.0');
          done();
        })
        .catch(done);
    });
    it('12.1.0', function (done) {
      toVersion('12.1.0')
        .then(function (version) {
          assert.equal(version, 'v12.1.0');
          done();
        })
        .catch(done);
    });
    it('>=8', function (done) {
      toVersion('>=8')
        .then(function (version) {
          assert.ok(version.length > 1);
          done();
        })
        .catch(done);
    });
  });

  describe('unhappy path', function () {
    it('v0.0', function (done) {
      toVersion('v0.0')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('0.0', function (done) {
      toVersion('0.0')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('v0.0.0', function (done) {
      toVersion('v0.0.0')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('0.0.0', function (done) {
      toVersion('0.0.0')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('va.0.1', function (done) {
      toVersion('va.0.1')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('v12a.0.1', function (done) {
      toVersion('v12a.0.1')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.b.1', function (done) {
      toVersion('v12.b.1')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.0b.1', function (done) {
      toVersion('v12.0b.1')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.0.c', function (done) {
      toVersion('v12.0.c')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
    it('v12.1.0c', function (done) {
      toVersion('v12.1.0c')
        .then(function () {
          assert.ok(false);
        })
        .catch(function (err) {
          assert.ok(!!err);
          done();
        });
    });
  });
});
