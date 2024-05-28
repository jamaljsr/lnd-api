// Original file: protos/signrpc/signer.proto

import type { TweakDescPartial as _signrpc_TweakDescPartial, TweakDesc as _signrpc_TweakDesc } from '../signrpc/TweakDesc';
import type { TaprootTweakDescPartial as _signrpc_TaprootTweakDescPartial, TaprootTweakDesc as _signrpc_TaprootTweakDesc } from '../signrpc/TaprootTweakDesc';
import type { MuSig2VersionPartial as _signrpc_MuSig2VersionPartial, MuSig2Version as _signrpc_MuSig2Version } from '../signrpc/MuSig2Version';

export interface MuSig2CombineKeysRequestPartial {
  'allSignerPubkeys'?: (Buffer | Uint8Array | string)[];
  'tweaks'?: (_signrpc_TweakDescPartial)[];
  'taprootTweak'?: (_signrpc_TaprootTweakDescPartial | null);
  'version'?: (_signrpc_MuSig2VersionPartial);
}

export interface MuSig2CombineKeysRequest {
  'allSignerPubkeys': (Buffer)[];
  'tweaks': (_signrpc_TweakDesc)[];
  'taprootTweak': (_signrpc_TaprootTweakDesc | null);
  'version': (_signrpc_MuSig2Version);
}
