// Original file: protos/signrpc/signer.proto

import type { MuSig2VersionPartial as _signrpc_MuSig2VersionPartial, MuSig2Version as _signrpc_MuSig2Version } from '../signrpc/MuSig2Version';

export interface MuSig2CombineKeysResponsePartial {
  'combinedKey'?: (Buffer | Uint8Array | string);
  'taprootInternalKey'?: (Buffer | Uint8Array | string);
  'version'?: (_signrpc_MuSig2VersionPartial);
}

export interface MuSig2CombineKeysResponse {
  'combinedKey': (Buffer);
  'taprootInternalKey': (Buffer);
  'version': (_signrpc_MuSig2Version);
}
