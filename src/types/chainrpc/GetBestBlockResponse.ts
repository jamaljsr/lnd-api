// Original file: protos/chainrpc/chainkit.proto


export interface GetBestBlockResponsePartial {
  'blockHash'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
}

export interface GetBestBlockResponse {
  'blockHash': (Buffer);
  'blockHeight': (number);
}
