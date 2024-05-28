// Original file: protos/invoicesrpc/invoices.proto


export interface SubscribeSingleInvoiceRequestPartial {
  'rHash'?: (Buffer | Uint8Array | string);
}

export interface SubscribeSingleInvoiceRequest {
  'rHash': (Buffer);
}
