// Original file: protos/invoicesrpc/invoices.proto

import type { RouteHintPartial as _lnrpc_RouteHintPartial, RouteHint as _lnrpc_RouteHint } from '../lnrpc/RouteHint';
import type { Long } from '@grpc/proto-loader';

export interface AddHoldInvoiceRequestPartial {
  'memo'?: (string);
  'hash'?: (Buffer | Uint8Array | string);
  'value'?: (number | string | Long);
  'descriptionHash'?: (Buffer | Uint8Array | string);
  'expiry'?: (number | string | Long);
  'fallbackAddr'?: (string);
  'cltvExpiry'?: (number | string | Long);
  'routeHints'?: (_lnrpc_RouteHintPartial)[];
  'private'?: (boolean);
  'valueMsat'?: (number | string | Long);
}

export interface AddHoldInvoiceRequest {
  'memo': (string);
  'hash': (Buffer);
  'value': (string);
  'descriptionHash': (Buffer);
  'expiry': (string);
  'fallbackAddr': (string);
  'cltvExpiry': (string);
  'routeHints': (_lnrpc_RouteHint)[];
  'private': (boolean);
  'valueMsat': (string);
}
