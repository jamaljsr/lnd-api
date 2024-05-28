import { ClientReadableStream } from '@grpc/grpc-js';
import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/invoices';

/**
 * API interface for lnd's Invoices RPC sub-server.
 */
export class InvoicesApi {
  /**
   * Create a new InvoicesApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'invoicesrpc/invoices.proto',
      options
    );

    return new InvoicesApi(
      new proto.invoicesrpc.Invoices(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.InvoicesClient;

  constructor(client: RPC.InvoicesClient) {
    this.client = client;
  }

  /**
   * SubscribeSingleInvoice returns a uni-directional stream (server -> client)
   * to notify the client of state transitions of the specified invoice.
   * Initially the current invoice state is always sent out.
   */
  subscribeSingleInvoice(
    request: RPC.SubscribeSingleInvoiceRequestPartial = {}
  ): ClientReadableStream<RPC.Invoice> {
    return this.client.SubscribeSingleInvoice(request);
  }

  /**
   * lncli: `cancelinvoice`
   * CancelInvoice cancels a currently open invoice. If the invoice is already
   * canceled, this call will succeed. If the invoice is already settled, it will
   * fail.
   */
  async cancelInvoice(
    request: RPC.CancelInvoiceMsgPartial = {}
  ): Promise<RPC.CancelInvoiceResp> {
    return promisify(this.client.CancelInvoice.bind(this.client))(request);
  }

  /**
   * lncli: `addholdinvoice`
   * AddHoldInvoice creates a hold invoice. It ties the invoice to the hash
   * supplied in the request.
   */
  async addHoldInvoice(
    request: RPC.AddHoldInvoiceRequestPartial = {}
  ): Promise<RPC.AddHoldInvoiceResp> {
    return promisify(this.client.AddHoldInvoice.bind(this.client))(request);
  }

  /**
   * lncli: `settleinvoice`
   * SettleInvoice settles an accepted invoice. If the invoice is already
   * settled, this call will succeed.
   */
  async settleInvoice(
    request: RPC.SettleInvoiceMsgPartial = {}
  ): Promise<RPC.SettleInvoiceResp> {
    return promisify(this.client.SettleInvoice.bind(this.client))(request);
  }

  /**
   * LookupInvoiceV2 attempts to look up at invoice. An invoice can be refrenced
   * using either its payment hash, payment address, or set ID.
   */
  async lookupInvoiceV2(
    request: RPC.LookupInvoiceMsgPartial = {}
  ): Promise<RPC.Invoice> {
    return promisify(this.client.LookupInvoiceV2.bind(this.client))(request);
  }
}
