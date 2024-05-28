// Original file: protos/chainrpc/chainkit.proto


export interface GetBlockHeaderResponsePartial {
  'rawBlockHeader'?: (Buffer | Uint8Array | string);
}

export interface GetBlockHeaderResponse {
  'rawBlockHeader': (Buffer);
}
