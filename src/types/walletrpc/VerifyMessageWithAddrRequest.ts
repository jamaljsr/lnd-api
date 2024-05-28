// Original file: protos/walletrpc/walletkit.proto


export interface VerifyMessageWithAddrRequestPartial {
  'msg'?: (Buffer | Uint8Array | string);
  'signature'?: (string);
  'addr'?: (string);
}

export interface VerifyMessageWithAddrRequest {
  'msg': (Buffer);
  'signature': (string);
  'addr': (string);
}
