// Original file: protos/walletrpc/walletkit.proto


export interface FinalizePsbtRequestPartial {
  'fundedPsbt'?: (Buffer | Uint8Array | string);
  'account'?: (string);
}

export interface FinalizePsbtRequest {
  'fundedPsbt': (Buffer);
  'account': (string);
}
