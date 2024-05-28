// Original file: protos/chainrpc/chainnotifier.proto


export interface BlockEpochPartial {
  'hash'?: (Buffer | Uint8Array | string);
  'height'?: (number);
}

export interface BlockEpoch {
  'hash': (Buffer);
  'height': (number);
}
