// Original file: protos/chainrpc/chainnotifier.proto

import type { ConfDetailsPartial as _chainrpc_ConfDetailsPartial, ConfDetails as _chainrpc_ConfDetails } from '../chainrpc/ConfDetails';
import type { ReorgPartial as _chainrpc_ReorgPartial, Reorg as _chainrpc_Reorg } from '../chainrpc/Reorg';

export interface ConfEventPartial {
  'conf'?: (_chainrpc_ConfDetailsPartial | null);
  'reorg'?: (_chainrpc_ReorgPartial | null);
  'event'?: "conf"|"reorg";
}

export interface ConfEvent {
  'conf'?: (_chainrpc_ConfDetails | null);
  'reorg'?: (_chainrpc_Reorg | null);
  'event': "conf"|"reorg";
}
