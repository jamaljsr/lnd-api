// Original file: protos/invoicesrpc/invoices.proto

import type { InvoicePartial as _lnrpc_InvoicePartial, Invoice as _lnrpc_Invoice } from '../lnrpc/Invoice';
import type { CircuitKeyPartial as _invoicesrpc_CircuitKeyPartial, CircuitKey as _invoicesrpc_CircuitKey } from '../invoicesrpc/CircuitKey';
import type { Long } from '@grpc/proto-loader';

export interface HtlcModifyRequestPartial {
  'invoice'?: (_lnrpc_InvoicePartial | null);
  'exitHtlcCircuitKey'?: (_invoicesrpc_CircuitKeyPartial | null);
  'exitHtlcAmt'?: (number | string | Long);
  'exitHtlcExpiry'?: (number);
  'currentHeight'?: (number);
  'exitHtlcWireCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
}

export interface HtlcModifyRequest {
  'invoice': (_lnrpc_Invoice | null);
  'exitHtlcCircuitKey': (_invoicesrpc_CircuitKey | null);
  'exitHtlcAmt': (string);
  'exitHtlcExpiry': (number);
  'currentHeight': (number);
  'exitHtlcWireCustomRecords': ({[key: number]: Buffer});
}
