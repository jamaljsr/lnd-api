// Original file: protos/invoicesrpc/invoices.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddHoldInvoiceRequestPartial as _invoicesrpc_AddHoldInvoiceRequestPartial, AddHoldInvoiceRequest as _invoicesrpc_AddHoldInvoiceRequest } from '../invoicesrpc/AddHoldInvoiceRequest';
import type { AddHoldInvoiceRespPartial as _invoicesrpc_AddHoldInvoiceRespPartial, AddHoldInvoiceResp as _invoicesrpc_AddHoldInvoiceResp } from '../invoicesrpc/AddHoldInvoiceResp';
import type { CancelInvoiceMsgPartial as _invoicesrpc_CancelInvoiceMsgPartial, CancelInvoiceMsg as _invoicesrpc_CancelInvoiceMsg } from '../invoicesrpc/CancelInvoiceMsg';
import type { CancelInvoiceRespPartial as _invoicesrpc_CancelInvoiceRespPartial, CancelInvoiceResp as _invoicesrpc_CancelInvoiceResp } from '../invoicesrpc/CancelInvoiceResp';
import type { HtlcModifyRequestPartial as _invoicesrpc_HtlcModifyRequestPartial, HtlcModifyRequest as _invoicesrpc_HtlcModifyRequest } from '../invoicesrpc/HtlcModifyRequest';
import type { HtlcModifyResponsePartial as _invoicesrpc_HtlcModifyResponsePartial, HtlcModifyResponse as _invoicesrpc_HtlcModifyResponse } from '../invoicesrpc/HtlcModifyResponse';
import type { InvoicePartial as _lnrpc_InvoicePartial, Invoice as _lnrpc_Invoice } from '../lnrpc/Invoice';
import type { LookupInvoiceMsgPartial as _invoicesrpc_LookupInvoiceMsgPartial, LookupInvoiceMsg as _invoicesrpc_LookupInvoiceMsg } from '../invoicesrpc/LookupInvoiceMsg';
import type { SettleInvoiceMsgPartial as _invoicesrpc_SettleInvoiceMsgPartial, SettleInvoiceMsg as _invoicesrpc_SettleInvoiceMsg } from '../invoicesrpc/SettleInvoiceMsg';
import type { SettleInvoiceRespPartial as _invoicesrpc_SettleInvoiceRespPartial, SettleInvoiceResp as _invoicesrpc_SettleInvoiceResp } from '../invoicesrpc/SettleInvoiceResp';
import type { SubscribeSingleInvoiceRequestPartial as _invoicesrpc_SubscribeSingleInvoiceRequestPartial, SubscribeSingleInvoiceRequest as _invoicesrpc_SubscribeSingleInvoiceRequest } from '../invoicesrpc/SubscribeSingleInvoiceRequest';

export interface InvoicesClient extends grpc.Client {
  AddHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  AddHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  AddHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  AddHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  addHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  addHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  addHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  addHoldInvoice(argument: _invoicesrpc_AddHoldInvoiceRequestPartial, callback: grpc.requestCallback<_invoicesrpc_AddHoldInvoiceResp>): grpc.ClientUnaryCall;
  
  CancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  CancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  CancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  CancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  cancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  cancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  cancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  cancelInvoice(argument: _invoicesrpc_CancelInvoiceMsgPartial, callback: grpc.requestCallback<_invoicesrpc_CancelInvoiceResp>): grpc.ClientUnaryCall;
  
  HtlcModifier(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_invoicesrpc_HtlcModifyResponsePartial, _invoicesrpc_HtlcModifyRequest>;
  HtlcModifier(options?: grpc.CallOptions): grpc.ClientDuplexStream<_invoicesrpc_HtlcModifyResponsePartial, _invoicesrpc_HtlcModifyRequest>;
  htlcModifier(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_invoicesrpc_HtlcModifyResponsePartial, _invoicesrpc_HtlcModifyRequest>;
  htlcModifier(options?: grpc.CallOptions): grpc.ClientDuplexStream<_invoicesrpc_HtlcModifyResponsePartial, _invoicesrpc_HtlcModifyRequest>;
  
  LookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  LookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  LookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  LookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  lookupInvoiceV2(argument: _invoicesrpc_LookupInvoiceMsgPartial, callback: grpc.requestCallback<_lnrpc_Invoice>): grpc.ClientUnaryCall;
  
  SettleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  SettleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  SettleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  SettleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  settleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  settleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  settleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  settleInvoice(argument: _invoicesrpc_SettleInvoiceMsgPartial, callback: grpc.requestCallback<_invoicesrpc_SettleInvoiceResp>): grpc.ClientUnaryCall;
  
  SubscribeSingleInvoice(argument: _invoicesrpc_SubscribeSingleInvoiceRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  SubscribeSingleInvoice(argument: _invoicesrpc_SubscribeSingleInvoiceRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  subscribeSingleInvoice(argument: _invoicesrpc_SubscribeSingleInvoiceRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  subscribeSingleInvoice(argument: _invoicesrpc_SubscribeSingleInvoiceRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice>;
  
}

export interface InvoicesHandlers extends grpc.UntypedServiceImplementation {
  AddHoldInvoice: grpc.handleUnaryCall<_invoicesrpc_AddHoldInvoiceRequest, _invoicesrpc_AddHoldInvoiceRespPartial>;
  
  CancelInvoice: grpc.handleUnaryCall<_invoicesrpc_CancelInvoiceMsg, _invoicesrpc_CancelInvoiceRespPartial>;
  
  HtlcModifier: grpc.handleBidiStreamingCall<_invoicesrpc_HtlcModifyResponse, _invoicesrpc_HtlcModifyRequestPartial>;
  
  LookupInvoiceV2: grpc.handleUnaryCall<_invoicesrpc_LookupInvoiceMsg, _lnrpc_InvoicePartial>;
  
  SettleInvoice: grpc.handleUnaryCall<_invoicesrpc_SettleInvoiceMsg, _invoicesrpc_SettleInvoiceRespPartial>;
  
  SubscribeSingleInvoice: grpc.handleServerStreamingCall<_invoicesrpc_SubscribeSingleInvoiceRequest, _lnrpc_InvoicePartial>;
  
}

export interface InvoicesDefinition extends grpc.ServiceDefinition {
  AddHoldInvoice: MethodDefinition<_invoicesrpc_AddHoldInvoiceRequestPartial, _invoicesrpc_AddHoldInvoiceRespPartial, _invoicesrpc_AddHoldInvoiceRequest, _invoicesrpc_AddHoldInvoiceResp>
  CancelInvoice: MethodDefinition<_invoicesrpc_CancelInvoiceMsgPartial, _invoicesrpc_CancelInvoiceRespPartial, _invoicesrpc_CancelInvoiceMsg, _invoicesrpc_CancelInvoiceResp>
  HtlcModifier: MethodDefinition<_invoicesrpc_HtlcModifyResponsePartial, _invoicesrpc_HtlcModifyRequestPartial, _invoicesrpc_HtlcModifyResponse, _invoicesrpc_HtlcModifyRequest>
  LookupInvoiceV2: MethodDefinition<_invoicesrpc_LookupInvoiceMsgPartial, _lnrpc_InvoicePartial, _invoicesrpc_LookupInvoiceMsg, _lnrpc_Invoice>
  SettleInvoice: MethodDefinition<_invoicesrpc_SettleInvoiceMsgPartial, _invoicesrpc_SettleInvoiceRespPartial, _invoicesrpc_SettleInvoiceMsg, _invoicesrpc_SettleInvoiceResp>
  SubscribeSingleInvoice: MethodDefinition<_invoicesrpc_SubscribeSingleInvoiceRequestPartial, _lnrpc_InvoicePartial, _invoicesrpc_SubscribeSingleInvoiceRequest, _lnrpc_Invoice>
}
