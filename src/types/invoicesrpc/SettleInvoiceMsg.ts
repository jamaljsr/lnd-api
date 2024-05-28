// Original file: protos/invoicesrpc/invoices.proto


export interface SettleInvoiceMsgPartial {
  'preimage'?: (Buffer | Uint8Array | string);
}

export interface SettleInvoiceMsg {
  'preimage': (Buffer);
}
