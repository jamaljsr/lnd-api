// Original file: protos/walletrpc/walletkit.proto

import type { AddressTypePartial as _walletrpc_AddressTypePartial, AddressType as _walletrpc_AddressType } from '../walletrpc/AddressType';

export interface ImportPublicKeyRequestPartial {
  'publicKey'?: (Buffer | Uint8Array | string);
  'addressType'?: (_walletrpc_AddressTypePartial);
}

export interface ImportPublicKeyRequest {
  'publicKey': (Buffer);
  'addressType': (_walletrpc_AddressType);
}
