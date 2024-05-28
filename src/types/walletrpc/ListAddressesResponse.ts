// Original file: protos/walletrpc/walletkit.proto

import type { AccountWithAddressesPartial as _walletrpc_AccountWithAddressesPartial, AccountWithAddresses as _walletrpc_AccountWithAddresses } from '../walletrpc/AccountWithAddresses';

export interface ListAddressesResponsePartial {
  'accountWithAddresses'?: (_walletrpc_AccountWithAddressesPartial)[];
}

export interface ListAddressesResponse {
  'accountWithAddresses': (_walletrpc_AccountWithAddresses)[];
}
