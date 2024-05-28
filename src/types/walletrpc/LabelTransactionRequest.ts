// Original file: protos/walletrpc/walletkit.proto


export interface LabelTransactionRequestPartial {
  'txid'?: (Buffer | Uint8Array | string);
  'label'?: (string);
  'overwrite'?: (boolean);
}

export interface LabelTransactionRequest {
  'txid': (Buffer);
  'label': (string);
  'overwrite': (boolean);
}
