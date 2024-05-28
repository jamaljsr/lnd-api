// Original file: protos/walletrpc/walletkit.proto


export interface TransactionPartial {
  'txHex'?: (Buffer | Uint8Array | string);
  'label'?: (string);
}

export interface Transaction {
  'txHex': (Buffer);
  'label': (string);
}
