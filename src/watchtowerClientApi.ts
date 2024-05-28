import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/wtclient';

/**
 * API interface for lnd's WatchtowerClient RPC sub-server.
 */
export class WatchtowerClientApi {
  /**
   * Create a new WatchtowerClientApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'wtclientrpc/wtclient.proto',
      options
    );

    return new WatchtowerClientApi(
      new proto.wtclientrpc.WatchtowerClient(
        options.socket,
        credentials,
        params
      )
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.WatchtowerClientClient;

  constructor(client: RPC.WatchtowerClientClient) {
    this.client = client;
  }

  /**
   * lncli: `wtclient add`
   * AddTower adds a new watchtower reachable at the given address and
   * considers it for new sessions. If the watchtower already exists, then
   * any new addresses included will be considered when dialing it for
   * session negotiations and backups.
   */
  async addTower(
    request: RPC.AddTowerRequestPartial = {}
  ): Promise<RPC.AddTowerResponse> {
    return promisify(this.client.AddTower.bind(this.client))(request);
  }

  /**
   * lncli: `wtclient remove`
   * RemoveTower removes a watchtower from being considered for future session
   * negotiations and from being used for any subsequent backups until it's added
   * again. If an address is provided, then this RPC only serves as a way of
   * removing the address from the watchtower instead.
   */
  async removeTower(
    request: RPC.RemoveTowerRequestPartial = {}
  ): Promise<RPC.RemoveTowerResponse> {
    return promisify(this.client.RemoveTower.bind(this.client))(request);
  }

  /**
   * lncli: `wtclient deactivate`
   * DeactivateTower sets the given tower's status to inactive so that it
   * is not considered for session negotiation. Its sessions will also not
   * be used while the tower is inactive.
   */
  async deactivateTower(
    request: RPC.DeactivateTowerRequestPartial = {}
  ): Promise<RPC.DeactivateTowerResponse> {
    return promisify(this.client.DeactivateTower.bind(this.client))(request);
  }

  /**
   * lncli: `wtclient session terminate`
   * Terminate terminates the given session and marks it as terminal so that
   * it is not used for backups anymore.
   */
  async terminateSession(
    request: RPC.TerminateSessionRequestPartial = {}
  ): Promise<RPC.TerminateSessionResponse> {
    return promisify(this.client.TerminateSession.bind(this.client))(request);
  }

  /**
   * lncli: `wtclient towers`
   * ListTowers returns the list of watchtowers registered with the client.
   */
  async listTowers(
    request: RPC.ListTowersRequestPartial = {}
  ): Promise<RPC.ListTowersResponse> {
    return promisify(this.client.ListTowers.bind(this.client))(request);
  }

  /**
   * lncli: `wtclient tower`
   * GetTowerInfo retrieves information for a registered watchtower.
   */
  async getTowerInfo(
    request: RPC.GetTowerInfoRequestPartial = {}
  ): Promise<RPC.Tower> {
    return promisify(this.client.GetTowerInfo.bind(this.client))(request);
  }

  /**
   * lncli: `wtclient stats`
   * Stats returns the in-memory statistics of the client since startup.
   */
  async stats(
    request: RPC.StatsRequestPartial = {}
  ): Promise<RPC.StatsResponse> {
    return promisify(this.client.Stats.bind(this.client))(request);
  }

  /**
   * lncli: `wtclient policy`
   * Policy returns the active watchtower client policy configuration.
   */
  async policy(
    request: RPC.PolicyRequestPartial = {}
  ): Promise<RPC.PolicyResponse> {
    return promisify(this.client.Policy.bind(this.client))(request);
  }
}
