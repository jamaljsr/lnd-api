// Original file: protos/signrpc/signer.proto


export interface MuSig2CombineSigRequestPartial {
  'sessionId'?: (Buffer | Uint8Array | string);
  'otherPartialSignatures'?: (Buffer | Uint8Array | string)[];
}

export interface MuSig2CombineSigRequest {
  'sessionId': (Buffer);
  'otherPartialSignatures': (Buffer)[];
}
