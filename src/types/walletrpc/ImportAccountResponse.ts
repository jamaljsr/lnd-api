// Original file: protos/walletrpc/walletkit.proto

import type { AccountPartial as _walletrpc_AccountPartial, Account as _walletrpc_Account } from '../walletrpc/Account';

export interface ImportAccountResponsePartial {
  'account'?: (_walletrpc_AccountPartial | null);
  'dryRunExternalAddrs'?: (string)[];
  'dryRunInternalAddrs'?: (string)[];
}

export interface ImportAccountResponse {
  'account': (_walletrpc_Account | null);
  'dryRunExternalAddrs': (string)[];
  'dryRunInternalAddrs': (string)[];
}
