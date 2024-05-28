// Original file: protos/walletrpc/walletkit.proto

import type { AddressTypePartial as _walletrpc_AddressTypePartial, AddressType as _walletrpc_AddressType } from '../walletrpc/AddressType';
import type { AddressPropertyPartial as _walletrpc_AddressPropertyPartial, AddressProperty as _walletrpc_AddressProperty } from '../walletrpc/AddressProperty';

export interface AccountWithAddressesPartial {
  'name'?: (string);
  'addressType'?: (_walletrpc_AddressTypePartial);
  'derivationPath'?: (string);
  'addresses'?: (_walletrpc_AddressPropertyPartial)[];
}

export interface AccountWithAddresses {
  'name': (string);
  'addressType': (_walletrpc_AddressType);
  'derivationPath': (string);
  'addresses': (_walletrpc_AddressProperty)[];
}
