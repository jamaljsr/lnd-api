// Original file: protos/walletunlocker.proto


export interface GenSeedResponsePartial {
  'cipherSeedMnemonic'?: (string)[];
  'encipheredSeed'?: (Buffer | Uint8Array | string);
}

export interface GenSeedResponse {
  'cipherSeedMnemonic': (string)[];
  'encipheredSeed': (Buffer);
}
