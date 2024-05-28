// Original file: protos/wtclientrpc/wtclient.proto


export interface DeactivateTowerRequestPartial {
  'pubkey'?: (Buffer | Uint8Array | string);
}

export interface DeactivateTowerRequest {
  'pubkey': (Buffer);
}
