// Original file: protos/chainrpc/chainkit.proto


export interface GetBlockResponsePartial {
  'rawBlock'?: (Buffer | Uint8Array | string);
}

export interface GetBlockResponse {
  'rawBlock': (Buffer);
}
