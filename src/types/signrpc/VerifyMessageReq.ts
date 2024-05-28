// Original file: protos/signrpc/signer.proto


export interface VerifyMessageReqPartial {
  'msg'?: (Buffer | Uint8Array | string);
  'signature'?: (Buffer | Uint8Array | string);
  'pubkey'?: (Buffer | Uint8Array | string);
  'isSchnorrSig'?: (boolean);
  'tag'?: (Buffer | Uint8Array | string);
}

export interface VerifyMessageReq {
  'msg': (Buffer);
  'signature': (Buffer);
  'pubkey': (Buffer);
  'isSchnorrSig': (boolean);
  'tag': (Buffer);
}
