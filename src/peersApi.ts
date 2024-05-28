import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/peers';

/**
 * API interface for lnd's Peers RPC sub-server.
 */
export class PeersApi {
  /**
   * Create a new PeersApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'peersrpc/peers.proto',
      options
    );

    return new PeersApi(
      new proto.peersrpc.Peers(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.PeersClient;

  constructor(client: RPC.PeersClient) {
    this.client = client;
  }

  /**
   * lncli: peers updatenodeannouncement
   * UpdateNodeAnnouncement allows the caller to update the node parameters
   * and broadcasts a new version of the node announcement to its peers.
   */
  async updateNodeAnnouncement(
    request: RPC.NodeAnnouncementUpdateRequestPartial = {}
  ): Promise<RPC.NodeAnnouncementUpdateResponse> {
    return promisify(this.client.UpdateNodeAnnouncement.bind(this.client))(
      request
    );
  }
}
