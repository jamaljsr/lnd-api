// Original file: protos/walletrpc/walletkit.proto

import type { AddressTypePartial as _walletrpc_AddressTypePartial, AddressType as _walletrpc_AddressType } from '../walletrpc/AddressType';

export interface AccountPartial {
  'name'?: (string);
  'addressType'?: (_walletrpc_AddressTypePartial);
  'extendedPublicKey'?: (string);
  'masterKeyFingerprint'?: (Buffer | Uint8Array | string);
  'derivationPath'?: (string);
  'externalKeyCount'?: (number);
  'internalKeyCount'?: (number);
  'watchOnly'?: (boolean);
}

export interface Account {
  'name': (string);
  'addressType': (_walletrpc_AddressType);
  'extendedPublicKey': (string);
  'masterKeyFingerprint': (Buffer);
  'derivationPath': (string);
  'externalKeyCount': (number);
  'internalKeyCount': (number);
  'watchOnly': (boolean);
}
