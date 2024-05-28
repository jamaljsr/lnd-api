// Original file: protos/invoicesrpc/invoices.proto

import type { Long } from '@grpc/proto-loader';

export interface AddHoldInvoiceRespPartial {
  'paymentRequest'?: (string);
  'addIndex'?: (number | string | Long);
  'paymentAddr'?: (Buffer | Uint8Array | string);
}

export interface AddHoldInvoiceResp {
  'paymentRequest': (string);
  'addIndex': (string);
  'paymentAddr': (Buffer);
}
