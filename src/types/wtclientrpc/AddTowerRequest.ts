// Original file: protos/wtclientrpc/wtclient.proto


export interface AddTowerRequestPartial {
  'pubkey'?: (Buffer | Uint8Array | string);
  'address'?: (string);
}

export interface AddTowerRequest {
  'pubkey': (Buffer);
  'address': (string);
}
