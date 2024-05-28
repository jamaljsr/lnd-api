// Original file: protos/invoicesrpc/invoices.proto

import type { LookupModifierPartial as _invoicesrpc_LookupModifierPartial, LookupModifier as _invoicesrpc_LookupModifier } from '../invoicesrpc/LookupModifier';

export interface LookupInvoiceMsgPartial {
  'paymentHash'?: (Buffer | Uint8Array | string);
  'paymentAddr'?: (Buffer | Uint8Array | string);
  'setId'?: (Buffer | Uint8Array | string);
  'lookupModifier'?: (_invoicesrpc_LookupModifierPartial);
  'invoiceRef'?: "paymentHash"|"paymentAddr"|"setId";
}

export interface LookupInvoiceMsg {
  'paymentHash'?: (Buffer);
  'paymentAddr'?: (Buffer);
  'setId'?: (Buffer);
  'lookupModifier': (_invoicesrpc_LookupModifier);
  'invoiceRef': "paymentHash"|"paymentAddr"|"setId";
}
