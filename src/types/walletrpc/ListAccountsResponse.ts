// Original file: protos/walletrpc/walletkit.proto

import type { AccountPartial as _walletrpc_AccountPartial, Account as _walletrpc_Account } from '../walletrpc/Account';

export interface ListAccountsResponsePartial {
  'accounts'?: (_walletrpc_AccountPartial)[];
}

export interface ListAccountsResponse {
  'accounts': (_walletrpc_Account)[];
}
