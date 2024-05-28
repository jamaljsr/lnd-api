// Original file: protos/walletrpc/walletkit.proto

import type { UtxoLeasePartial as _walletrpc_UtxoLeasePartial, UtxoLease as _walletrpc_UtxoLease } from '../walletrpc/UtxoLease';

export interface ListLeasesResponsePartial {
  'lockedUtxos'?: (_walletrpc_UtxoLeasePartial)[];
}

export interface ListLeasesResponse {
  'lockedUtxos': (_walletrpc_UtxoLease)[];
}
