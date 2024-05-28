// Original file: protos/walletrpc/walletkit.proto


export interface TapLeafPartial {
  'leafVersion'?: (number);
  'script'?: (Buffer | Uint8Array | string);
}

export interface TapLeaf {
  'leafVersion': (number);
  'script': (Buffer);
}
