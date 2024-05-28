// Original file: protos/chainrpc/chainnotifier.proto


export interface ConfRequestPartial {
  'txid'?: (Buffer | Uint8Array | string);
  'script'?: (Buffer | Uint8Array | string);
  'numConfs'?: (number);
  'heightHint'?: (number);
  'includeBlock'?: (boolean);
}

export interface ConfRequest {
  'txid': (Buffer);
  'script': (Buffer);
  'numConfs': (number);
  'heightHint': (number);
  'includeBlock': (boolean);
}
