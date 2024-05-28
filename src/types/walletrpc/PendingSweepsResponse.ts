// Original file: protos/walletrpc/walletkit.proto

import type { PendingSweepPartial as _walletrpc_PendingSweepPartial, PendingSweep as _walletrpc_PendingSweep } from '../walletrpc/PendingSweep';

export interface PendingSweepsResponsePartial {
  'pendingSweeps'?: (_walletrpc_PendingSweepPartial)[];
}

export interface PendingSweepsResponse {
  'pendingSweeps': (_walletrpc_PendingSweep)[];
}
