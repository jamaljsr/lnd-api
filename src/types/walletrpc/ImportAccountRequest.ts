// Original file: protos/walletrpc/walletkit.proto

import type { AddressTypePartial as _walletrpc_AddressTypePartial, AddressType as _walletrpc_AddressType } from '../walletrpc/AddressType';

export interface ImportAccountRequestPartial {
  'name'?: (string);
  'extendedPublicKey'?: (string);
  'masterKeyFingerprint'?: (Buffer | Uint8Array | string);
  'addressType'?: (_walletrpc_AddressTypePartial);
  'dryRun'?: (boolean);
}

export interface ImportAccountRequest {
  'name': (string);
  'extendedPublicKey': (string);
  'masterKeyFingerprint': (Buffer);
  'addressType': (_walletrpc_AddressType);
  'dryRun': (boolean);
}
