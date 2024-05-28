import { AutopilotApi } from './autopilotApi';
import { ChainKitApi } from './chainKitApi';
import { ChainNotifierApi } from './chainNotifierApi';
import { InvoicesApi } from './invoicesApi';
import { LightningApi } from './lightningApi';
import { NeutrinoKitApi } from './neutrinoKitApi';
import { PeersApi } from './peersApi';
import { RouterApi } from './routerApi';
import { SignerApi } from './signerApi';
import { StateApi } from './stateApi';
import { VersionerApi } from './versionerApi';
import { WalletKitApi } from './walletKitApi';
import { WalletUnlockerApi } from './walletUnlockerApi';
import { WatchtowerApi } from './watchtowerApi';
import { WatchtowerClientApi } from './watchtowerClientApi';

export interface LndClientOptions {
  /**
   * lnd's host and port in `host:port` format.
   */
  socket: string;
  /**
   * lnd's macaroon in HEX format.
   */
  macaroon: string;
  /**
   * lnd's TLS certificate in HEX format.
   */
  cert: string;
}

/**
 * The lnd RPC APIs.
 */
export interface LndRpcApis {
  lightning: LightningApi;
  state: StateApi;
  walletUnlocker: WalletUnlockerApi;
  autopilot: AutopilotApi;
  chainKit: ChainKitApi;
  chainNotifier: ChainNotifierApi;
  invoices: InvoicesApi;
  neutrino: NeutrinoKitApi;
  peers: PeersApi;
  router: RouterApi;
  signer: SignerApi;
  versioner: VersionerApi;
  walletKit: WalletKitApi;
  watchtower: WatchtowerApi;
  watchtowerClient: WatchtowerClientApi;
}

export class LndClient {
  /**
   * Create instances of all lnd RPC APIs.
   */
  static create(options: LndClientOptions): LndRpcApis {
    return {
      lightning: LightningApi.create(options),
      state: StateApi.create(options),
      walletUnlocker: WalletUnlockerApi.create(options),
      autopilot: AutopilotApi.create(options),
      chainKit: ChainKitApi.create(options),
      chainNotifier: ChainNotifierApi.create(options),
      invoices: InvoicesApi.create(options),
      neutrino: NeutrinoKitApi.create(options),
      peers: PeersApi.create(options),
      router: RouterApi.create(options),
      signer: SignerApi.create(options),
      versioner: VersionerApi.create(options),
      walletKit: WalletKitApi.create(options),
      watchtower: WatchtowerApi.create(options),
      watchtowerClient: WatchtowerClientApi.create(options),
    };
  }
}

export {
  LightningApi,
  StateApi,
  WalletUnlockerApi,
  AutopilotApi,
  ChainKitApi,
  ChainNotifierApi,
  InvoicesApi,
  NeutrinoKitApi,
  PeersApi,
  RouterApi,
  SignerApi,
  VersionerApi,
  WalletKitApi,
  WatchtowerApi,
  WatchtowerClientApi,
};
export * from './types';
