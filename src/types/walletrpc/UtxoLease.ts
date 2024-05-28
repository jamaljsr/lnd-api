// Original file: protos/walletrpc/walletkit.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface UtxoLeasePartial {
  'id'?: (Buffer | Uint8Array | string);
  'outpoint'?: (_lnrpc_OutPointPartial | null);
  'expiration'?: (number | string | Long);
  'pkScript'?: (Buffer | Uint8Array | string);
  'value'?: (number | string | Long);
}

export interface UtxoLease {
  'id': (Buffer);
  'outpoint': (_lnrpc_OutPoint | null);
  'expiration': (string);
  'pkScript': (Buffer);
  'value': (string);
}
