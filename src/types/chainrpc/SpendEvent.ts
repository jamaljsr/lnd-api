// Original file: protos/chainrpc/chainnotifier.proto

import type { SpendDetailsPartial as _chainrpc_SpendDetailsPartial, SpendDetails as _chainrpc_SpendDetails } from '../chainrpc/SpendDetails';
import type { ReorgPartial as _chainrpc_ReorgPartial, Reorg as _chainrpc_Reorg } from '../chainrpc/Reorg';

export interface SpendEventPartial {
  'spend'?: (_chainrpc_SpendDetailsPartial | null);
  'reorg'?: (_chainrpc_ReorgPartial | null);
  'event'?: "spend"|"reorg";
}

export interface SpendEvent {
  'spend'?: (_chainrpc_SpendDetails | null);
  'reorg'?: (_chainrpc_Reorg | null);
  'event': "spend"|"reorg";
}
