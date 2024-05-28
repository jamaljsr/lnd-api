// Original file: protos/signrpc/signer.proto

import type { MuSig2VersionPartial as _signrpc_MuSig2VersionPartial, MuSig2Version as _signrpc_MuSig2Version } from '../signrpc/MuSig2Version';

export interface MuSig2SessionResponsePartial {
  'sessionId'?: (Buffer | Uint8Array | string);
  'combinedKey'?: (Buffer | Uint8Array | string);
  'taprootInternalKey'?: (Buffer | Uint8Array | string);
  'localPublicNonces'?: (Buffer | Uint8Array | string);
  'haveAllNonces'?: (boolean);
  'version'?: (_signrpc_MuSig2VersionPartial);
}

export interface MuSig2SessionResponse {
  'sessionId': (Buffer);
  'combinedKey': (Buffer);
  'taprootInternalKey': (Buffer);
  'localPublicNonces': (Buffer);
  'haveAllNonces': (boolean);
  'version': (_signrpc_MuSig2Version);
}
