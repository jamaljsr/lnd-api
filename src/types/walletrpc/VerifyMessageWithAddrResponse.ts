// Original file: protos/walletrpc/walletkit.proto


export interface VerifyMessageWithAddrResponsePartial {
  'valid'?: (boolean);
  'pubkey'?: (Buffer | Uint8Array | string);
}

export interface VerifyMessageWithAddrResponse {
  'valid': (boolean);
  'pubkey': (Buffer);
}
