// Original file: protos/chainrpc/chainnotifier.proto

import type { OutpointPartial as _chainrpc_OutpointPartial, Outpoint as _chainrpc_Outpoint } from '../chainrpc/Outpoint';

export interface SpendRequestPartial {
  'outpoint'?: (_chainrpc_OutpointPartial | null);
  'script'?: (Buffer | Uint8Array | string);
  'heightHint'?: (number);
}

export interface SpendRequest {
  'outpoint': (_chainrpc_Outpoint | null);
  'script': (Buffer);
  'heightHint': (number);
}
