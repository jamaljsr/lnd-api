// Original file: protos/signrpc/signer.proto


export interface MuSig2CombineSigResponsePartial {
  'haveAllSignatures'?: (boolean);
  'finalSignature'?: (Buffer | Uint8Array | string);
}

export interface MuSig2CombineSigResponse {
  'haveAllSignatures': (boolean);
  'finalSignature': (Buffer);
}
