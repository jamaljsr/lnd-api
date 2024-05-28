// Original file: protos/signrpc/signer.proto


export interface SignMessageRespPartial {
  'signature'?: (Buffer | Uint8Array | string);
}

export interface SignMessageResp {
  'signature': (Buffer);
}
