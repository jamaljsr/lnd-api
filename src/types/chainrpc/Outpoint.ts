// Original file: protos/chainrpc/chainnotifier.proto


export interface OutpointPartial {
  'hash'?: (Buffer | Uint8Array | string);
  'index'?: (number);
}

export interface Outpoint {
  'hash': (Buffer);
  'index': (number);
}
