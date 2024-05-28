// Original file: protos/signrpc/signer.proto

import type { KeyLocatorPartial as _signrpc_KeyLocatorPartial, KeyLocator as _signrpc_KeyLocator } from '../signrpc/KeyLocator';
import type { TweakDescPartial as _signrpc_TweakDescPartial, TweakDesc as _signrpc_TweakDesc } from '../signrpc/TweakDesc';
import type { TaprootTweakDescPartial as _signrpc_TaprootTweakDescPartial, TaprootTweakDesc as _signrpc_TaprootTweakDesc } from '../signrpc/TaprootTweakDesc';
import type { MuSig2VersionPartial as _signrpc_MuSig2VersionPartial, MuSig2Version as _signrpc_MuSig2Version } from '../signrpc/MuSig2Version';

export interface MuSig2SessionRequestPartial {
  'keyLoc'?: (_signrpc_KeyLocatorPartial | null);
  'allSignerPubkeys'?: (Buffer | Uint8Array | string)[];
  'otherSignerPublicNonces'?: (Buffer | Uint8Array | string)[];
  'tweaks'?: (_signrpc_TweakDescPartial)[];
  'taprootTweak'?: (_signrpc_TaprootTweakDescPartial | null);
  'version'?: (_signrpc_MuSig2VersionPartial);
  'pregeneratedLocalNonce'?: (Buffer | Uint8Array | string);
}

export interface MuSig2SessionRequest {
  'keyLoc': (_signrpc_KeyLocator | null);
  'allSignerPubkeys': (Buffer)[];
  'otherSignerPublicNonces': (Buffer)[];
  'tweaks': (_signrpc_TweakDesc)[];
  'taprootTweak': (_signrpc_TaprootTweakDesc | null);
  'version': (_signrpc_MuSig2Version);
  'pregeneratedLocalNonce': (Buffer);
}
