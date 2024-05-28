// Original file: protos/peersrpc/peers.proto

export const FeatureSet = {
  SET_INIT: 'SET_INIT',
  SET_LEGACY_GLOBAL: 'SET_LEGACY_GLOBAL',
  SET_NODE_ANN: 'SET_NODE_ANN',
  SET_INVOICE: 'SET_INVOICE',
  SET_INVOICE_AMP: 'SET_INVOICE_AMP',
} as const;

export type FeatureSetPartial =
  | 'SET_INIT'
  | 0
  | 'SET_LEGACY_GLOBAL'
  | 1
  | 'SET_NODE_ANN'
  | 2
  | 'SET_INVOICE'
  | 3
  | 'SET_INVOICE_AMP'
  | 4

export type FeatureSet = typeof FeatureSet[keyof typeof FeatureSet]
