import { ClientReadableStream } from '@grpc/grpc-js';
import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/stateservice';

/**
 * API interface for lnd's State RPC sub-server.
 */
export class StateApi {
  /**
   * Create a new StateApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'stateservice.proto',
      options
    );

    return new StateApi(
      new proto.lnrpc.State(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.StateClient;

  constructor(client: RPC.StateClient) {
    this.client = client;
  }

  /**
   * SubscribeState subscribes to the state of the wallet. The current wallet
   * state will always be delivered immediately.
   */
  subscribeState(
    request: RPC.SubscribeStateRequestPartial = {}
  ): ClientReadableStream<RPC.SubscribeStateResponse> {
    return this.client.SubscribeState(request);
  }

  /**
   * GetState returns the current wallet state without streaming further
   * changes.
   */
  async getState(
    request: RPC.GetStateRequestPartial = {}
  ): Promise<RPC.GetStateResponse> {
    return promisify(this.client.GetState.bind(this.client))(request);
  }
}
