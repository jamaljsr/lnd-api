// Original file: protos/walletunlocker.proto


export interface ChangePasswordResponsePartial {
  'adminMacaroon'?: (Buffer | Uint8Array | string);
}

export interface ChangePasswordResponse {
  'adminMacaroon': (Buffer);
}
