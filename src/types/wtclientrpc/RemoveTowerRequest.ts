// Original file: protos/wtclientrpc/wtclient.proto


export interface RemoveTowerRequestPartial {
  'pubkey'?: (Buffer | Uint8Array | string);
  'address'?: (string);
}

export interface RemoveTowerRequest {
  'pubkey': (Buffer);
  'address': (string);
}
