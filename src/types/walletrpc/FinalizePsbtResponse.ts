// Original file: protos/walletrpc/walletkit.proto


export interface FinalizePsbtResponsePartial {
  'signedPsbt'?: (Buffer | Uint8Array | string);
  'rawFinalTx'?: (Buffer | Uint8Array | string);
}

export interface FinalizePsbtResponse {
  'signedPsbt': (Buffer);
  'rawFinalTx': (Buffer);
}
