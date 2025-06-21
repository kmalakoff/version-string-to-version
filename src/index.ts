import type { VersionCallback, VersionOptions, VersionResult } from './types.ts';
import worker from './worker.ts';

export type * from './types.ts';

export default function resolveVersion(versionString: string): Promise<VersionResult[]>;
export default function resolveVersion(versionString: string, options: VersionOptions): Promise<VersionResult[]>;

export default function resolveVersion(versionString: string, callback: VersionCallback): undefined;
export default function resolveVersion(versionString: string, options: VersionOptions, callback: VersionCallback): undefined;

export default function resolveVersion(versionString: string, options?: VersionOptions | VersionCallback, callback?: VersionCallback): undefined | Promise<VersionResult[]> {
  if (typeof options === 'function') {
    callback = options as VersionCallback;
    options = {};
  }
  options = options || {};

  if (typeof callback === 'function') return worker(versionString, options, callback) as undefined;
  return new Promise((resolve, reject) =>
    worker(versionString, options, (err, result) => {
      err ? reject(err) : resolve(result);
    })
  );
}
