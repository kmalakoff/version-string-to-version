import type { Version } from 'node-semvers';

export type VersionResult = string | Version;

export interface VersionOptions {
  range?: string;
  concurrency?: number;
  sort?: number;
}

export type VersionCallback = (err?: Error, results?: VersionResult[]) => undefined;
