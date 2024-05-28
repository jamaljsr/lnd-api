// Original file: protos/wtclientrpc/wtclient.proto

export const PolicyType = {
  LEGACY: 'LEGACY',
  ANCHOR: 'ANCHOR',
  TAPROOT: 'TAPROOT',
} as const;

export type PolicyTypePartial =
  | 'LEGACY'
  | 0
  | 'ANCHOR'
  | 1
  | 'TAPROOT'
  | 2

export type PolicyType = typeof PolicyType[keyof typeof PolicyType]
