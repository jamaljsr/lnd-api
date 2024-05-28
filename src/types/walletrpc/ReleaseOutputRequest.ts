// Original file: protos/walletrpc/walletkit.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';

export interface ReleaseOutputRequestPartial {
  'id'?: (Buffer | Uint8Array | string);
  'outpoint'?: (_lnrpc_OutPointPartial | null);
}

export interface ReleaseOutputRequest {
  'id': (Buffer);
  'outpoint': (_lnrpc_OutPoint | null);
}
