// Original file: protos/walletrpc/walletkit.proto

import type { TapLeafPartial as _walletrpc_TapLeafPartial, TapLeaf as _walletrpc_TapLeaf } from '../walletrpc/TapLeaf';

export interface TapscriptPartialRevealPartial {
  'revealedLeaf'?: (_walletrpc_TapLeafPartial | null);
  'fullInclusionProof'?: (Buffer | Uint8Array | string);
}

export interface TapscriptPartialReveal {
  'revealedLeaf': (_walletrpc_TapLeaf | null);
  'fullInclusionProof': (Buffer);
}
