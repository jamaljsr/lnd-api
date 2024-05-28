// Original file: protos/signrpc/signer.proto


export interface SharedKeyResponsePartial {
  'sharedKey'?: (Buffer | Uint8Array | string);
}

export interface SharedKeyResponse {
  'sharedKey': (Buffer);
}
