// Original file: protos/walletrpc/walletkit.proto

import type { TapscriptFullTreePartial as _walletrpc_TapscriptFullTreePartial, TapscriptFullTree as _walletrpc_TapscriptFullTree } from '../walletrpc/TapscriptFullTree';
import type { TapscriptPartialRevealPartial as _walletrpc_TapscriptPartialRevealPartial, TapscriptPartialReveal as _walletrpc_TapscriptPartialReveal } from '../walletrpc/TapscriptPartialReveal';

export interface ImportTapscriptRequestPartial {
  'internalPublicKey'?: (Buffer | Uint8Array | string);
  'fullTree'?: (_walletrpc_TapscriptFullTreePartial | null);
  'partialReveal'?: (_walletrpc_TapscriptPartialRevealPartial | null);
  'rootHashOnly'?: (Buffer | Uint8Array | string);
  'fullKeyOnly'?: (boolean);
  'script'?: "fullTree"|"partialReveal"|"rootHashOnly"|"fullKeyOnly";
}

export interface ImportTapscriptRequest {
  'internalPublicKey': (Buffer);
  'fullTree'?: (_walletrpc_TapscriptFullTree | null);
  'partialReveal'?: (_walletrpc_TapscriptPartialReveal | null);
  'rootHashOnly'?: (Buffer);
  'fullKeyOnly'?: (boolean);
  'script': "fullTree"|"partialReveal"|"rootHashOnly"|"fullKeyOnly";
}
