import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/chainkit';

/**
 * API interface for lnd's ChainKit RPC sub-server.
 */
export class ChainKitApi {
  /**
   * Create a new ChainKitApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'chainrpc/chainkit.proto',
      options
    );

    return new ChainKitApi(
      new proto.chainrpc.ChainKit(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.ChainKitClient;

  constructor(client: RPC.ChainKitClient) {
    this.client = client;
  }

  /**
   * lncli: `chain getblock`
   * GetBlock returns a block given the corresponding block hash.
   */
  async getBlock(
    request: RPC.GetBlockRequestPartial = {}
  ): Promise<RPC.GetBlockResponse> {
    return promisify(this.client.GetBlock.bind(this.client))(request);
  }

  /**
   * lncli: `chain getblockheader`
   * GetBlockHeader returns a block header with a particular block hash.
   */
  async getBlockHeader(
    request: RPC.GetBlockHeaderRequestPartial = {}
  ): Promise<RPC.GetBlockHeaderResponse> {
    return promisify(this.client.GetBlockHeader.bind(this.client))(request);
  }

  /**
   * lncli: `chain getbestblock`
   * GetBestBlock returns the block hash and current height from the valid
   * most-work chain.
   */
  async getBestBlock(
    request: RPC.GetBestBlockRequestPartial = {}
  ): Promise<RPC.GetBestBlockResponse> {
    return promisify(this.client.GetBestBlock.bind(this.client))(request);
  }

  /**
   * lncli: `chain getblockhash`
   * GetBlockHash returns the hash of the block in the best blockchain
   * at the given height.
   */
  async getBlockHash(
    request: RPC.GetBlockHashRequestPartial = {}
  ): Promise<RPC.GetBlockHashResponse> {
    return promisify(this.client.GetBlockHash.bind(this.client))(request);
  }
}
