// Original file: protos/chainrpc/chainkit.proto


export interface GetBlockHeaderRequestPartial {
  'blockHash'?: (Buffer | Uint8Array | string);
}

export interface GetBlockHeaderRequest {
  'blockHash': (Buffer);
}
