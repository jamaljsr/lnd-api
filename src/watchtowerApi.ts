import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/watchtower';
import { GetInfoRequestPartial } from './types/watchtowerrpc/GetInfoRequest';
import { GetInfoResponse } from './types/watchtowerrpc/GetInfoResponse';

/**
 * API interface for lnd's Watchtower RPC sub-server.
 */
export class WatchtowerApi {
  /**
   * Create a new WatchtowerApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'watchtowerrpc/watchtower.proto',
      options
    );

    return new WatchtowerApi(
      new proto.watchtowerrpc.Watchtower(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.WatchtowerClient;

  constructor(client: RPC.WatchtowerClient) {
    this.client = client;
  }

  /**
   * lncli: `tower info`
   * GetInfo returns general information concerning the companion watchtower
   * including its public key and URIs where the server is currently
   * listening for clients.
   */
  async getInfo(request: GetInfoRequestPartial = {}): Promise<GetInfoResponse> {
    return promisify(this.client.GetInfo.bind(this.client))(request);
  }
}
