// Original file: protos/walletrpc/walletkit.proto

import type { AddressTypePartial as _walletrpc_AddressTypePartial, AddressType as _walletrpc_AddressType } from '../walletrpc/AddressType';

export interface AddrRequestPartial {
  'account'?: (string);
  'type'?: (_walletrpc_AddressTypePartial);
  'change'?: (boolean);
}

export interface AddrRequest {
  'account': (string);
  'type': (_walletrpc_AddressType);
  'change': (boolean);
}
