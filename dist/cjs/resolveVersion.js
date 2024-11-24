"use strict";
var NodeSemvers = require('node-semvers');
var isArray = require('isarray');
module.exports = function resolveVersion(versionString, options, callback) {
    NodeSemvers.load(function(err, semvers) {
        if (err) return callback(err);
        var version = semvers.resolve(versionString, options);
        if (isArray(version) && !version.length || !version) return callback(new Error("Version string invalid ".concat(versionString)));
        callback(null, version);
    });
};
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }