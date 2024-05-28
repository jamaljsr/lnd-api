// Original file: protos/chainrpc/chainkit.proto


export interface GetBlockRequestPartial {
  'blockHash'?: (Buffer | Uint8Array | string);
}

export interface GetBlockRequest {
  'blockHash': (Buffer);
}
