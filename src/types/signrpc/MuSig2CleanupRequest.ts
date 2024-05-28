// Original file: protos/signrpc/signer.proto


export interface MuSig2CleanupRequestPartial {
  'sessionId'?: (Buffer | Uint8Array | string);
}

export interface MuSig2CleanupRequest {
  'sessionId': (Buffer);
}
