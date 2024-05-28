// Original file: protos/chainrpc/chainkit.proto


export interface GetBlockHashResponsePartial {
  'blockHash'?: (Buffer | Uint8Array | string);
}

export interface GetBlockHashResponse {
  'blockHash': (Buffer);
}
