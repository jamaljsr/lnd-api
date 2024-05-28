// Original file: protos/wtclientrpc/wtclient.proto


export interface GetTowerInfoRequestPartial {
  'pubkey'?: (Buffer | Uint8Array | string);
  'includeSessions'?: (boolean);
  'excludeExhaustedSessions'?: (boolean);
}

export interface GetTowerInfoRequest {
  'pubkey': (Buffer);
  'includeSessions': (boolean);
  'excludeExhaustedSessions': (boolean);
}
