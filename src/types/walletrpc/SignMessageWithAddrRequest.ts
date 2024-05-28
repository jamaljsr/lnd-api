// Original file: protos/walletrpc/walletkit.proto


export interface SignMessageWithAddrRequestPartial {
  'msg'?: (Buffer | Uint8Array | string);
  'addr'?: (string);
}

export interface SignMessageWithAddrRequest {
  'msg': (Buffer);
  'addr': (string);
}
