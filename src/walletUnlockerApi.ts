import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/walletunlocker';

/**
 * API interface for lnd's WalletUnlocker RPC sub-server.
 */
export class WalletUnlockerApi {
  /**
   * Create a new WalletUnlockerApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'walletunlocker.proto',
      options
    );

    return new WalletUnlockerApi(
      new proto.lnrpc.WalletUnlocker(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.WalletUnlockerClient;

  constructor(client: RPC.WalletUnlockerClient) {
    this.client = client;
  }

  /**
   * GenSeed is the first method that should be used to instantiate a new lnd
   * instance. This method allows a caller to generate a new aezeed cipher seed
   * given an optional passphrase. If provided, the passphrase will be necessary
   * to decrypt the cipherseed to expose the internal wallet seed.
   *
   * Once the cipherseed is obtained and verified by the user, the InitWallet
   * method should be used to commit the newly generated seed, and create the
   * wallet.
   */
  async genSeed(
    request: RPC.GenSeedRequestPartial = {}
  ): Promise<RPC.GenSeedResponse> {
    return promisify(this.client.GenSeed.bind(this.client))(request);
  }

  /**
   * InitWallet is used when lnd is starting up for the first time to fully
   * initialize the daemon and its internal wallet. At the very least a wallet
   * password must be provided. This will be used to encrypt sensitive material
   * on disk.
   *
   * In the case of a recovery scenario, the user can also specify their aezeed
   * mnemonic and passphrase. If set, then the daemon will use this prior state
   * to initialize its internal wallet.
   *
   * Alternatively, this can be used along with the GenSeed RPC to obtain a
   * seed, then present it to the user. Once it has been verified by the user,
   * the seed can be fed into this RPC in order to commit the new wallet.
   */
  async initWallet(
    request: RPC.InitWalletRequestPartial = {}
  ): Promise<RPC.InitWalletResponse> {
    return promisify(this.client.InitWallet.bind(this.client))(request);
  }

  /**
   * lncli: `unlock`
   * UnlockWallet is used at startup of lnd to provide a password to unlock
   * the wallet database.
   */
  async unlockWallet(
    request: RPC.UnlockWalletRequestPartial = {}
  ): Promise<RPC.UnlockWalletResponse> {
    return promisify(this.client.UnlockWallet.bind(this.client))(request);
  }

  /**
   * lncli: `changepassword`
   * ChangePassword changes the password of the encrypted wallet. This will
   * automatically unlock the wallet database if successful.
   */
  async changePassword(
    request: RPC.ChangePasswordRequestPartial = {}
  ): Promise<RPC.ChangePasswordResponse> {
    return promisify(this.client.ChangePassword.bind(this.client))(request);
  }
}
