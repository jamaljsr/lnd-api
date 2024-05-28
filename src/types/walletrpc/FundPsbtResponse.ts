// Original file: protos/walletrpc/walletkit.proto

import type { UtxoLeasePartial as _walletrpc_UtxoLeasePartial, UtxoLease as _walletrpc_UtxoLease } from '../walletrpc/UtxoLease';

export interface FundPsbtResponsePartial {
  'fundedPsbt'?: (Buffer | Uint8Array | string);
  'changeOutputIndex'?: (number);
  'lockedUtxos'?: (_walletrpc_UtxoLeasePartial)[];
}

export interface FundPsbtResponse {
  'fundedPsbt': (Buffer);
  'changeOutputIndex': (number);
  'lockedUtxos': (_walletrpc_UtxoLease)[];
}
