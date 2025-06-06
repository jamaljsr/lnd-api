// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface HTLCPartial {
  'incoming'?: (boolean);
  'amount'?: (number | string | Long);
  'hashLock'?: (Buffer | Uint8Array | string);
  'expirationHeight'?: (number);
  'htlcIndex'?: (number | string | Long);
  'forwardingChannel'?: (number | string | Long);
  'forwardingHtlcIndex'?: (number | string | Long);
  'lockedIn'?: (boolean);
}

export interface HTLC {
  'incoming': (boolean);
  'amount': (string);
  'hashLock': (Buffer);
  'expirationHeight': (number);
  'htlcIndex': (string);
  'forwardingChannel': (string);
  'forwardingHtlcIndex': (string);
  'lockedIn': (boolean);
}
