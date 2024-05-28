import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/verrpc';

/**
 * API interface for lnd's Versioner RPC sub-server.
 */
export class VersionerApi {
  /**
   * Create a new VersionerApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'verrpc/verrpc.proto',
      options
    );

    return new VersionerApi(
      new proto.verrpc.Versioner(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.VersionerClient;

  constructor(client: RPC.VersionerClient) {
    this.client = client;
  }

  /**
   * lncli: `version`
   * GetVersion returns the current version and build information of the running
   * daemon.
   */
  async getVersion(
    request: RPC.VersionRequestPartial = {}
  ): Promise<RPC.Version> {
    return promisify(this.client.GetVersion.bind(this.client))(request);
  }
}
