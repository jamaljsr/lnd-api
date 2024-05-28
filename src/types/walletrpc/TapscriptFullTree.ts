// Original file: protos/walletrpc/walletkit.proto

import type { TapLeafPartial as _walletrpc_TapLeafPartial, TapLeaf as _walletrpc_TapLeaf } from '../walletrpc/TapLeaf';

export interface TapscriptFullTreePartial {
  'allLeaves'?: (_walletrpc_TapLeafPartial)[];
}

export interface TapscriptFullTree {
  'allLeaves': (_walletrpc_TapLeaf)[];
}
