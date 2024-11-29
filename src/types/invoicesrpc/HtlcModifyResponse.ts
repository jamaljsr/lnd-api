// Original file: protos/invoicesrpc/invoices.proto

import type { CircuitKeyPartial as _invoicesrpc_CircuitKeyPartial, CircuitKey as _invoicesrpc_CircuitKey } from '../invoicesrpc/CircuitKey';
import type { Long } from '@grpc/proto-loader';

export interface HtlcModifyResponsePartial {
  'circuitKey'?: (_invoicesrpc_CircuitKeyPartial | null);
  'amtPaid'?: (number | string | Long);
  'cancelSet'?: (boolean);
  '_amtPaid'?: "amtPaid";
}

export interface HtlcModifyResponse {
  'circuitKey': (_invoicesrpc_CircuitKey | null);
  'amtPaid'?: (string);
  'cancelSet': (boolean);
  '_amtPaid': "amtPaid";
}
