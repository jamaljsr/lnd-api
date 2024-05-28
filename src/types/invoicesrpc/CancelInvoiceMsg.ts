// Original file: protos/invoicesrpc/invoices.proto


export interface CancelInvoiceMsgPartial {
  'paymentHash'?: (Buffer | Uint8Array | string);
}

export interface CancelInvoiceMsg {
  'paymentHash': (Buffer);
}
