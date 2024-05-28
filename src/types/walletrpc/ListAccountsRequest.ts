// Original file: protos/walletrpc/walletkit.proto

import type { AddressTypePartial as _walletrpc_AddressTypePartial, AddressType as _walletrpc_AddressType } from '../walletrpc/AddressType';

export interface ListAccountsRequestPartial {
  'name'?: (string);
  'addressType'?: (_walletrpc_AddressTypePartial);
}

export interface ListAccountsRequest {
  'name': (string);
  'addressType': (_walletrpc_AddressType);
}
