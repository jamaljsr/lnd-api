// Original file: protos/watchtowerrpc/watchtower.proto


export interface GetInfoResponsePartial {
  'pubkey'?: (Buffer | Uint8Array | string);
  'listeners'?: (string)[];
  'uris'?: (string)[];
}

export interface GetInfoResponse {
  'pubkey': (Buffer);
  'listeners': (string)[];
  'uris': (string)[];
}
