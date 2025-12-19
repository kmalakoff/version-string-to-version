import NodeSemvers from 'node-semvers';

const isArray = Array.isArray || ((x) => Object.prototype.toString.call(x) === '[object Array]');

import type { VersionCallback, VersionOptions, VersionResult } from './types.ts';

export default function resolveVersion(versionString: string, options: VersionOptions, callback: VersionCallback): void {
  NodeSemvers.load((err, semvers) => {
    if (err) return callback(err);
    const version = semvers.resolve(versionString, options) as VersionResult[];
    if ((isArray(version) && !version.length) || !version) return callback(new Error(`Version string invalid ${versionString}`));
    callback(null, version);
  });
}
