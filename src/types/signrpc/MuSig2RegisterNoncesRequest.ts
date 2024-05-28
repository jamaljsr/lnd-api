// Original file: protos/signrpc/signer.proto


export interface MuSig2RegisterNoncesRequestPartial {
  'sessionId'?: (Buffer | Uint8Array | string);
  'otherSignerPublicNonces'?: (Buffer | Uint8Array | string)[];
}

export interface MuSig2RegisterNoncesRequest {
  'sessionId': (Buffer);
  'otherSignerPublicNonces': (Buffer)[];
}
