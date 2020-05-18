var assert = require('assert');

var toVersion = require('../..');

describe('callback', function () {
  describe('happy path', function () {
    it('v12', function (done) {
      toVersion('v12', function (err, version) {
        assert.ok(!err);
        assert.equal(version.slice(0, 4), 'v12.');
        done();
      });
    });
    it('12', function (done) {
      toVersion('12', function (err, version) {
        assert.ok(!err);
        assert.equal(version.slice(0, 4), 'v12.');
        done();
      });
    });
    it('v0', function (done) {
      toVersion('v0', function (err, version) {
        assert.ok(!err);
        assert.equal(version.slice(0, 3), 'v0.');
        done();
      });
    });
    it('0', function (done) {
      toVersion('0', function (err, version) {
        assert.ok(!err);
        assert.equal(version.slice(0, 3), 'v0.');
        done();
      });
    });
    it('v12.0', function (done) {
      toVersion('v12.0', function (err, version) {
        assert.ok(!err);
        assert.equal(version.slice(0, 6), 'v12.0.');
        done();
      });
    });
    it('12.0', function (done) {
      toVersion('12.0', function (err, version) {
        assert.ok(!err);
        assert.equal(version.slice(0, 6), 'v12.0.');
        done();
      });
    });
    it('v12.1.0', function (done) {
      toVersion('v12.1.0', function (err, version) {
        assert.ok(!err);
        assert.equal(version, 'v12.1.0');
        done();
      });
    });
    it('12.1.0', function (done) {
      toVersion('12.1.0', function (err, version) {
        assert.ok(!err);
        assert.equal(version, 'v12.1.0');
        done();
      });
    });
    it('>=8', function (done) {
      toVersion('>=8', function (err, version) {
        assert.ok(!err);
        assert.ok(version.length > 1);
        done();
      });
    });
  });

  describe('unhappy path', function () {
    it('v0.0', function (done) {
      toVersion('v0.0', function (err) {
        assert.ok(!!err);
        done();
      });
    });
    it('0.0', function (done) {
      toVersion('0.0', function (err) {
        assert.ok(!!err);
        done();
      });
    });
    it('v0.0.0', function (done) {
      toVersion('v0.0.0', function (err, version) {
        assert.ok(!!err);
        done();
      });
    });
    it('0.0.0', function (done) {
      toVersion('0.0.0', function (err, version) {
        assert.ok(!!err);
        done();
      });
    });
    it('va.0.1', function (done) {
      toVersion('va.0.1', function (err) {
        assert.ok(!!err);
        done();
      });
    });
    it('v12a.0.1', function (done) {
      toVersion('v12a.0.1', function (err) {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.b.1', function (done) {
      toVersion('v12.b.1', function (err) {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.0b.1', function (done) {
      toVersion('v12.0b.1', function (err) {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.0.c', function (done) {
      toVersion('v12.0.c', function (err) {
        assert.ok(!!err);
        done();
      });
    });
    it('v12.1.0c', function (done) {
      toVersion('v12.1.0c', function (err) {
        assert.ok(!!err);
        done();
      });
    });
  });
});
