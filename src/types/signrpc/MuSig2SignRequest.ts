// Original file: protos/signrpc/signer.proto


export interface MuSig2SignRequestPartial {
  'sessionId'?: (Buffer | Uint8Array | string);
  'messageDigest'?: (Buffer | Uint8Array | string);
  'cleanup'?: (boolean);
}

export interface MuSig2SignRequest {
  'sessionId': (Buffer);
  'messageDigest': (Buffer);
  'cleanup': (boolean);
}
