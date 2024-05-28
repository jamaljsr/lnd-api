// Original file: protos/walletrpc/walletkit.proto


export interface SignPsbtResponsePartial {
  'signedPsbt'?: (Buffer | Uint8Array | string);
  'signedInputs'?: (number)[];
}

export interface SignPsbtResponse {
  'signedPsbt': (Buffer);
  'signedInputs': (number)[];
}
