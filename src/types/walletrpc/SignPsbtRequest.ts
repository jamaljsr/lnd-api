// Original file: protos/walletrpc/walletkit.proto


export interface SignPsbtRequestPartial {
  'fundedPsbt'?: (Buffer | Uint8Array | string);
}

export interface SignPsbtRequest {
  'fundedPsbt': (Buffer);
}
