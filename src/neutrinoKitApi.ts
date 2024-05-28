import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/neutrino';

/**
 * API interface for lnd's NeutrinoKit RPC sub-server.
 */
export class NeutrinoKitApi {
  /**
   * Create a new NeutrinoKitApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'neutrinorpc/neutrino.proto',
      options
    );

    return new NeutrinoKitApi(
      new proto.neutrinorpc.NeutrinoKit(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.NeutrinoKitClient;

  constructor(client: RPC.NeutrinoKitClient) {
    this.client = client;
  }

  /**
   * lncli: `neutrino status`
   * Status returns the status of the light client neutrino instance,
   * along with height and hash of the best block, and a list of connected
   * peers.
   */
  async status(
    request: RPC.StatusRequestPartial = {}
  ): Promise<RPC.StatusResponse> {
    return promisify(this.client.Status.bind(this.client))(request);
  }

  /**
   * lncli: `neutrino addpeer`
   * AddPeer adds a new peer that has already been connected to the server.
   */
  async addPeer(
    request: RPC.AddPeerRequestPartial = {}
  ): Promise<RPC.AddPeerResponse> {
    return promisify(this.client.AddPeer.bind(this.client))(request);
  }

  /**
   * lncli: `neutrino disconnectpeer`
   * DisconnectPeer disconnects a peer by target address. Both outbound and
   * inbound nodes will be searched for the target node. An error message will
   * be returned if the peer was not found.
   */
  async disconnectPeer(
    request: RPC.DisconnectPeerRequestPartial = {}
  ): Promise<RPC.DisconnectPeerResponse> {
    return promisify(this.client.DisconnectPeer.bind(this.client))(request);
  }

  /**
   * lncli: `neutrino isbanned`
   * IsBanned returns true if the peer is banned, otherwise false.
   */
  async isBanned(
    request: RPC.IsBannedRequestPartial = {}
  ): Promise<RPC.IsBannedResponse> {
    return promisify(this.client.IsBanned.bind(this.client))(request);
  }

  /**
   * lncli: `neutrino getblockheader`
   * GetBlockHeader returns a block header with a particular block hash.
   */
  async getBlockHeader(
    request: RPC.GetBlockHeaderRequestPartial = {}
  ): Promise<RPC.GetBlockHeaderResponse> {
    return promisify(this.client.GetBlockHeader.bind(this.client))(request);
  }

  /**
   * GetBlock returns a block with a particular block hash.
   */
  async getBlock(
    request: RPC.GetBlockRequestPartial = {}
  ): Promise<RPC.GetBlockResponse> {
    return promisify(this.client.GetBlock.bind(this.client))(request);
  }

  /**
   * lncli: `neutrino getcfilter`
   * GetCFilter returns a compact filter from a block.
   */
  async getCFilter(
    request: RPC.GetCFilterRequestPartial = {}
  ): Promise<RPC.GetCFilterResponse> {
    return promisify(this.client.GetCFilter.bind(this.client))(request);
  }

  /**
   * Deprecated, use chainrpc.GetBlockHash instead.
   * GetBlockHash returns the header hash of a block at a given height.
   */
  async getBlockHash(
    request: RPC.GetBlockHashRequestPartial = {}
  ): Promise<RPC.GetBlockHashResponse> {
    return promisify(this.client.GetBlockHash.bind(this.client))(request);
  }
}
