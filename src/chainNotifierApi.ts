import { ClientReadableStream } from '@grpc/grpc-js';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/chainnotifier';

/**
 * API interface for lnd's ChainNotifier RPC sub-server.
 */
export class ChainNotifierApi {
  /**
   * Create a new ChainNotifierApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'chainrpc/chainnotifier.proto',
      options
    );

    return new ChainNotifierApi(
      new proto.chainrpc.ChainNotifier(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.ChainNotifierClient;

  constructor(client: RPC.ChainNotifierClient) {
    this.client = client;
  }

  /**
   * RegisterConfirmationsNtfn is a synchronous response-streaming RPC that
   * registers an intent for a client to be notified once a confirmation request
   * has reached its required number of confirmations on-chain.
   *
   * A confirmation request must have a valid output script. It is also possible
   * to give a transaction ID. If the transaction ID is not set, a notification
   * is sent once the output script confirms. If the transaction ID is also set,
   * a notification is sent once the output script confirms in the given
   * transaction.
   */
  registerConfirmationsNtfn(
    request: RPC.ConfRequestPartial = {}
  ): ClientReadableStream<RPC.ConfEvent> {
    return this.client.RegisterConfirmationsNtfn(request);
  }

  /**
   * RegisterSpendNtfn is a synchronous response-streaming RPC that registers an
   * intent for a client to be notification once a spend request has been spent
   * by a transaction that has confirmed on-chain.
   *
   * A client can specify whether the spend request should be for a particular
   * outpoint  or for an output script by specifying a zero outpoint.
   */
  registerSpendNtfn(
    request: RPC.SpendRequestPartial = {}
  ): ClientReadableStream<RPC.SpendEvent> {
    return this.client.RegisterSpendNtfn(request);
  }

  /**
   * RegisterBlockEpochNtfn is a synchronous response-streaming RPC that
   * registers an intent for a client to be notified of blocks in the chain. The
   * stream will return a hash and height tuple of a block for each new/stale
   * block in the chain. It is the client's responsibility to determine whether
   * the tuple returned is for a new or stale block in the chain.
   *
   * A client can also request a historical backlog of blocks from a particular
   * point. This allows clients to be idempotent by ensuring that they do not
   * missing processing a single block within the chain.
   */
  registerBlockEpochNtfn(
    request: RPC.BlockEpochPartial = {}
  ): ClientReadableStream<RPC.BlockEpoch> {
    return this.client.RegisterBlockEpochNtfn(request);
  }
}
