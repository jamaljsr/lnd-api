// Original file: protos/walletrpc/walletkit.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface LeaseOutputRequestPartial {
  'id'?: (Buffer | Uint8Array | string);
  'outpoint'?: (_lnrpc_OutPointPartial | null);
  'expirationSeconds'?: (number | string | Long);
}

export interface LeaseOutputRequest {
  'id': (Buffer);
  'outpoint': (_lnrpc_OutPoint | null);
  'expirationSeconds': (string);
}
