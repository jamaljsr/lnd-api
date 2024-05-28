// Original file: protos/walletunlocker.proto


export interface InitWalletResponsePartial {
  'adminMacaroon'?: (Buffer | Uint8Array | string);
}

export interface InitWalletResponse {
  'adminMacaroon': (Buffer);
}
