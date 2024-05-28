// Original file: protos/walletunlocker.proto


export interface GenSeedRequestPartial {
  'aezeedPassphrase'?: (Buffer | Uint8Array | string);
  'seedEntropy'?: (Buffer | Uint8Array | string);
}

export interface GenSeedRequest {
  'aezeedPassphrase': (Buffer);
  'seedEntropy': (Buffer);
}
