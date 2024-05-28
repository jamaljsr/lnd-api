// Original file: protos/walletunlocker.proto


export interface ChangePasswordRequestPartial {
  'currentPassword'?: (Buffer | Uint8Array | string);
  'newPassword'?: (Buffer | Uint8Array | string);
  'statelessInit'?: (boolean);
  'newMacaroonRootKey'?: (boolean);
}

export interface ChangePasswordRequest {
  'currentPassword': (Buffer);
  'newPassword': (Buffer);
  'statelessInit': (boolean);
  'newMacaroonRootKey': (boolean);
}
