import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/autopilot';

/**
 * API interface for lnd's Lightning RPC sub-server.
 */
export class AutopilotApi {
  /**
   * Create a new AutopilotApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'autopilotrpc/autopilot.proto',
      options
    );

    return new AutopilotApi(
      new proto.autopilotrpc.Autopilot(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.AutopilotClient;

  constructor(client: RPC.AutopilotClient) {
    this.client = client;
  }

  /**
   * lncli: `autopilot status`
   * Status returns whether the daemon's autopilot agent is active.
   */
  async status(
    request: RPC.StatusRequestPartial = {}
  ): Promise<RPC.StatusResponse> {
    return promisify(this.client.Status.bind(this.client))(request);
  }

  /**
   * ModifyStatus is used to modify the status of the autopilot agent, like
   * enabling or disabling it.
   */
  async modifyStatus(
    request: RPC.ModifyStatusRequestPartial = {}
  ): Promise<RPC.ModifyStatusResponse> {
    return promisify(this.client.ModifyStatus.bind(this.client))(request);
  }

  /**
   * lncli: `autopilot query`
   * QueryScores queries all available autopilot heuristics, in addition to any
   * active combination of these heruristics, for the scores they would give to
   * the given nodes.
   */
  async queryScores(
    request: RPC.QueryScoresRequestPartial = {}
  ): Promise<RPC.QueryScoresResponse> {
    return promisify(this.client.QueryScores.bind(this.client))(request);
  }

  /**
   * SetScores attempts to set the scores used by the running autopilot agent,
   * if the external scoring heuristic is enabled.
   */
  async setScores(
    request: RPC.SetScoresRequestPartial = {}
  ): Promise<RPC.SetScoresResponse> {
    return promisify(this.client.SetScores.bind(this.client))(request);
  }
}
