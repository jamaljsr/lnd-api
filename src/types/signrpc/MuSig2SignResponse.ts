// Original file: protos/signrpc/signer.proto


export interface MuSig2SignResponsePartial {
  'localPartialSignature'?: (Buffer | Uint8Array | string);
}

export interface MuSig2SignResponse {
  'localPartialSignature': (Buffer);
}
