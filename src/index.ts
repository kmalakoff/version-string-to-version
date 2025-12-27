import type { VersionCallback, VersionOptions, VersionResult } from './types.ts';
import worker from './worker.ts';

export type * from './types.ts';

export default function resolveVersion(versionString: string): Promise<VersionResult[]>;
export default function resolveVersion(versionString: string, options: VersionOptions): Promise<VersionResult[]>;

export default function resolveVersion(versionString: string, callback: VersionCallback): void;
export default function resolveVersion(versionString: string, options: VersionOptions, callback: VersionCallback): void;

export default function resolveVersion(versionString: string, options?: VersionOptions | VersionCallback, callback?: VersionCallback): void | Promise<VersionResult[]> {
  callback = typeof options === 'function' ? options : callback;
  options = typeof options === 'function' ? {} : ((options || {}) as VersionOptions);

  if (typeof callback === 'function') return worker(versionString, options, callback);
  return new Promise((resolve, reject) => worker(versionString, options, (err, result) => (err ? reject(err) : resolve(result))));
}
