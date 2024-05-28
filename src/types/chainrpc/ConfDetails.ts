// Original file: protos/chainrpc/chainnotifier.proto


export interface ConfDetailsPartial {
  'rawTx'?: (Buffer | Uint8Array | string);
  'blockHash'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
  'txIndex'?: (number);
  'rawBlock'?: (Buffer | Uint8Array | string);
}

export interface ConfDetails {
  'rawTx': (Buffer);
  'blockHash': (Buffer);
  'blockHeight': (number);
  'txIndex': (number);
  'rawBlock': (Buffer);
}
