import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/walletkit';

/**
 * API interface for lnd's WalletKit RPC sub-server.
 */
export class WalletKitApi {
  /**
   * Create a new WalletKitApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'walletrpc/walletkit.proto',
      options
    );

    return new WalletKitApi(
      new proto.walletrpc.WalletKit(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.WalletKitClient;

  constructor(client: RPC.WalletKitClient) {
    this.client = client;
  }

  /**
   * ListUnspent returns a list of all utxos spendable by the wallet with a
   * number of confirmations between the specified minimum and maximum. By
   * default, all utxos are listed. To list only the unconfirmed utxos, set
   * the unconfirmed_only to true.
   */
  async listUnspent(
    request: RPC.ListUnspentRequestPartial = {}
  ): Promise<RPC.ListUnspentResponse> {
    return promisify(this.client.ListUnspent.bind(this.client))(request);
  }

  /**
   * lncli: `wallet leaseoutput`
   * LeaseOutput locks an output to the given ID, preventing it from being
   * available for any future coin selection attempts. The absolute time of the
   * lock's expiration is returned. The expiration of the lock can be extended by
   * successive invocations of this RPC. Outputs can be unlocked before their
   * expiration through `ReleaseOutput`.
   */
  async leaseOutput(
    request: RPC.LeaseOutputRequestPartial = {}
  ): Promise<RPC.LeaseOutputResponse> {
    return promisify(this.client.LeaseOutput.bind(this.client))(request);
  }

  /**
   * lncli: `wallet releaseoutput`
   * ReleaseOutput unlocks an output, allowing it to be available for coin
   * selection if it remains unspent. The ID should match the one used to
   * originally lock the output.
   */
  async releaseOutput(
    request: RPC.ReleaseOutputRequestPartial = {}
  ): Promise<RPC.ReleaseOutputResponse> {
    return promisify(this.client.ReleaseOutput.bind(this.client))(request);
  }

  /**
   * lncli: `wallet listleases`
   * ListLeases lists all currently locked utxos.
   */
  async listLeases(
    request: RPC.ListLeasesRequestPartial = {}
  ): Promise<RPC.ListLeasesResponse> {
    return promisify(this.client.ListLeases.bind(this.client))(request);
  }

  /**
   * DeriveNextKey attempts to derive the *next* key within the key family
   * (account in BIP43) specified. This method should return the next external
   * child within this branch.
   */
  async deriveNextKey(
    request: RPC.KeyReqPartial = {}
  ): Promise<RPC.KeyDescriptor> {
    return promisify(this.client.DeriveNextKey.bind(this.client))(request);
  }

  /**
   * DeriveKey attempts to derive an arbitrary key specified by the passed
   * KeyLocator.
   */
  async deriveKey(request: RPC.KeyReqPartial = {}): Promise<RPC.KeyDescriptor> {
    return promisify(this.client.DeriveKey.bind(this.client))(request);
  }

  /**
   * NextAddr returns the next unused address within the wallet.
   */
  async nextAddr(
    request: RPC.AddrRequestPartial = {}
  ): Promise<RPC.AddrResponse> {
    return promisify(this.client.NextAddr.bind(this.client))(request);
  }

  /**
   * lncli: `wallet gettx`
   * GetTransaction returns details for a transaction found in the wallet.
   */
  async getTransaction(
    request: RPC.GetTransactionRequestPartial = {}
  ): Promise<RPC.Transaction> {
    return promisify(this.client.GetTransaction.bind(this.client))(request);
  }

  /**
   * lncli: `wallet accounts list`
   * ListAccounts retrieves all accounts belonging to the wallet by default. A
   * name and key scope filter can be provided to filter through all of the
   * wallet accounts and return only those matching.
   */
  async listAccounts(
    request: RPC.ListAccountsRequestPartial = {}
  ): Promise<RPC.ListAccountsResponse> {
    return promisify(this.client.ListAccounts.bind(this.client))(request);
  }

  /**
   * lncli: `wallet requiredreserve`
   * RequiredReserve returns the minimum amount of satoshis that should be kept
   * in the wallet in order to fee bump anchor channels if necessary. The value
   * scales with the number of public anchor channels but is capped at a maximum.
   */
  async requiredReserve(
    request: RPC.RequiredReserveRequestPartial = {}
  ): Promise<RPC.RequiredReserveResponse> {
    return promisify(this.client.RequiredReserve.bind(this.client))(request);
  }

  /**
   * lncli: `wallet addresses list`
   * ListAddresses retrieves all the addresses along with their balance. An
   * account name filter can be provided to filter through all of the
   * wallet accounts and return the addresses of only those matching.
   */
  async listAddresses(
    request: RPC.ListAddressesRequestPartial = {}
  ): Promise<RPC.ListAddressesResponse> {
    return promisify(this.client.ListAddresses.bind(this.client))(request);
  }

  /**
   * lncli: `wallet addresses signmessage`
   * SignMessageWithAddr returns the compact signature (base64 encoded) created
   * with the private key of the provided address. This requires the address
   * to be solely based on a public key lock (no scripts). Obviously the internal
   * lnd wallet has to possess the private key of the address otherwise
   * an error is returned.
   *
   * This method aims to provide full compatibility with the bitcoin-core and
   * btcd implementation. Bitcoin-core's algorithm is not specified in a
   * BIP and only applicable for legacy addresses. This method enhances the
   * signing for additional address types: P2WKH, NP2WKH, P2TR.
   * For P2TR addresses this represents a special case. ECDSA is used to create
   * a compact signature which makes the public key of the signature recoverable.
   */
  async signMessageWithAddr(
    request: RPC.SignMessageWithAddrRequestPartial = {}
  ): Promise<RPC.SignMessageWithAddrResponse> {
    return promisify(this.client.SignMessageWithAddr.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `wallet addresses verifymessage`
   * VerifyMessageWithAddr returns the validity and the recovered public key of
   * the provided compact signature (base64 encoded). The verification is
   * twofold. First the validity of the signature itself is checked and then
   * it is verified that the recovered public key of the signature equals
   * the public key of the provided address. There is no dependence on the
   * private key of the address therefore also external addresses are allowed
   * to verify signatures.
   * Supported address types are P2PKH, P2WKH, NP2WKH, P2TR.
   *
   * This method is the counterpart of the related signing method
   * (SignMessageWithAddr) and aims to provide full compatibility to
   * bitcoin-core's implementation. Although bitcoin-core/btcd only provide
   * this functionality for legacy addresses this function enhances it to
   * the address types: P2PKH, P2WKH, NP2WKH, P2TR.
   *
   * The verification for P2TR addresses is a special case and requires the
   * ECDSA compact signature to compare the reovered public key to the internal
   * taproot key. The compact ECDSA signature format was used because there
   * are still no known compact signature schemes for schnorr signatures.
   */
  async verifyMessageWithAddr(
    request: RPC.VerifyMessageWithAddrRequestPartial = {}
  ): Promise<RPC.VerifyMessageWithAddrResponse> {
    return promisify(this.client.VerifyMessageWithAddr.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `wallet accounts import`
   * ImportAccount imports an account backed by an account extended public key.
   * The master key fingerprint denotes the fingerprint of the root key
   * corresponding to the account public key (also known as the key with
   * derivation path m/). This may be required by some hardware wallets for
   * proper identification and signing.
   *
   * The address type can usually be inferred from the key's version, but may be
   * required for certain keys to map them into the proper scope.
   *
   * For BIP-0044 keys, an address type must be specified as we intend to not
   * support importing BIP-0044 keys into the wallet using the legacy
   * pay-to-pubkey-hash (P2PKH) scheme. A nested witness address type will force
   * the standard BIP-0049 derivation scheme, while a witness address type will
   * force the standard BIP-0084 derivation scheme.
   *
   * For BIP-0049 keys, an address type must also be specified to make a
   * distinction between the standard BIP-0049 address schema (nested witness
   * pubkeys everywhere) and our own BIP-0049Plus address schema (nested pubkeys
   * externally, witness pubkeys internally).
   *
   * NOTE: Events (deposits/spends) for keys derived from an account will only be
   * detected by lnd if they happen after the import. Rescans to detect past
   * events will be supported later on.
   */
  async importAccount(
    request: RPC.ImportAccountRequestPartial = {}
  ): Promise<RPC.ImportAccountResponse> {
    return promisify(this.client.ImportAccount.bind(this.client))(request);
  }

  /**
   * lncli: `wallet accounts import-pubkey`
   * ImportPublicKey imports a public key as watch-only into the wallet. The
   * public key is converted into a simple address of the given type and that
   * address script is watched on chain. For Taproot keys, this will only watch
   * the BIP-0086 style output script. Use ImportTapscript for more advanced key
   * spend or script spend outputs.
   *
   * NOTE: Events (deposits/spends) for a key will only be detected by lnd if
   * they happen after the import. Rescans to detect past events will be
   * supported later on.
   */
  async importPublicKey(
    request: RPC.ImportPublicKeyRequestPartial = {}
  ): Promise<RPC.ImportPublicKeyResponse> {
    return promisify(this.client.ImportPublicKey.bind(this.client))(request);
  }

  /**
   * ImportTapscript imports a Taproot script and internal key and adds the
   * resulting Taproot output key as a watch-only output script into the wallet.
   * For BIP-0086 style Taproot keys (no root hash commitment and no script spend
   * path) use ImportPublicKey.
   *
   * NOTE: Events (deposits/spends) for a key will only be detected by lnd if
   * they happen after the import. Rescans to detect past events will be
   * supported later on.
   *
   * NOTE: Taproot keys imported through this RPC currently _cannot_ be used for
   * funding PSBTs. Only tracking the balance and UTXOs is currently supported.
   */
  async importTapscript(
    request: RPC.ImportTapscriptRequestPartial = {}
  ): Promise<RPC.ImportTapscriptResponse> {
    return promisify(this.client.ImportTapscript.bind(this.client))(request);
  }

  /**
   * lncli: `wallet publishtx`
   * PublishTransaction attempts to publish the passed transaction to the
   * network. Once this returns without an error, the wallet will continually
   * attempt to re-broadcast the transaction on start up, until it enters the
   * chain.
   */
  async publishTransaction(
    request: RPC.TransactionPartial = {}
  ): Promise<RPC.PublishResponse> {
    return promisify(this.client.PublishTransaction.bind(this.client))(request);
  }

  /**
   * lncli: `wallet removetx`
   * RemoveTransaction attempts to remove the provided transaction from the
   * internal transaction store of the wallet.
   */
  async removeTransaction(
    request: RPC.GetTransactionRequestPartial = {}
  ): Promise<RPC.RemoveTransactionResponse> {
    return promisify(this.client.RemoveTransaction.bind(this.client))(request);
  }

  /**
   * SendOutputs is similar to the existing sendmany call in Bitcoind, and
   * allows the caller to create a transaction that sends to several outputs at
   * once. This is ideal when wanting to batch create a set of transactions.
   */
  async sendOutputs(
    request: RPC.SendOutputsRequestPartial = {}
  ): Promise<RPC.SendOutputsResponse> {
    return promisify(this.client.SendOutputs.bind(this.client))(request);
  }

  /**
   * EstimateFee attempts to query the internal fee estimator of the wallet to
   * determine the fee (in sat/kw) to attach to a transaction in order to
   * achieve the confirmation target.
   */
  async estimateFee(
    request: RPC.EstimateFeeRequestPartial = {}
  ): Promise<RPC.EstimateFeeResponse> {
    return promisify(this.client.EstimateFee.bind(this.client))(request);
  }

  /**
   * lncli: `pendingsweeps`
   * PendingSweeps returns lists of on-chain outputs that lnd is currently
   * attempting to sweep within its central batching engine. Outputs with similar
   * fee rates are batched together in order to sweep them within a single
   * transaction.
   *
   * NOTE: Some of the fields within PendingSweepsRequest are not guaranteed to
   * remain supported. This is an advanced API that depends on the internals of
   * the UtxoSweeper, so things may change.
   */
  async pendingSweeps(
    request: RPC.PendingSweepsRequestPartial = {}
  ): Promise<RPC.PendingSweepsResponse> {
    return promisify(this.client.PendingSweeps.bind(this.client))(request);
  }

  /**
   * lncli: `wallet bumpfee`
   * BumpFee is an endpoint that allows users to interact with lnd's sweeper
   * directly. It takes an outpoint from an unconfirmed transaction and sends it
   * to the sweeper for potential fee bumping. Depending on whether the outpoint
   * has been registered in the sweeper (an existing input, e.g., an anchor
   * output) or not (a new input, e.g., an unconfirmed wallet utxo), this will
   * either be an RBF or CPFP attempt.
   *
   * When receiving an input, lnd’s sweeper needs to understand its time
   * sensitivity to make economical fee bumps - internally a fee function is
   * created using the deadline and budget to guide the process. When the
   * deadline is approaching, the fee function will increase the fee rate and
   * perform an RBF.
   *
   * When a force close happens, all the outputs from the force closing
   * transaction will be registered in the sweeper. The sweeper will then handle
   * the creation, publish, and fee bumping of the sweeping transactions.
   * Everytime a new block comes in, unless the sweeping transaction is
   * confirmed, an RBF is attempted. To interfere with this automatic process,
   * users can use BumpFee to specify customized fee rate, budget, deadline, and
   * whether the sweep should happen immediately. It's recommended to call
   * `ListSweeps` to understand the shape of the existing sweeping transaction
   * first - depending on the number of inputs in this transaction, the RBF
   * requirements can be quite different.
   *
   * This RPC also serves useful when wanting to perform a Child-Pays-For-Parent
   * (CPFP), where the child transaction pays for its parent's fee. This can be
   * done by specifying an outpoint within the low fee transaction that is under
   * the control of the wallet.
   */
  async bumpFee(
    request: RPC.BumpFeeRequestPartial = {}
  ): Promise<RPC.BumpFeeResponse> {
    return promisify(this.client.BumpFee.bind(this.client))(request);
  }

  /**
   * lncli: `wallet listsweeps`
   * ListSweeps returns a list of the sweep transactions our node has produced.
   * Note that these sweeps may not be confirmed yet, as we record sweeps on
   * broadcast, not confirmation.
   */
  async listSweeps(
    request: RPC.ListSweepsRequestPartial = {}
  ): Promise<RPC.ListSweepsResponse> {
    return promisify(this.client.ListSweeps.bind(this.client))(request);
  }

  /**
   * lncli: `wallet labeltx`
   * LabelTransaction adds a label to a transaction. If the transaction already
   * has a label the call will fail unless the overwrite bool is set. This will
   * overwrite the exiting transaction label. Labels must not be empty, and
   * cannot exceed 500 characters.
   */
  async labelTransaction(
    request: RPC.LabelTransactionRequestPartial = {}
  ): Promise<RPC.LabelTransactionResponse> {
    return promisify(this.client.LabelTransaction.bind(this.client))(request);
  }

  /**
   * lncli: `wallet psbt fund`
   * FundPsbt creates a fully populated PSBT that contains enough inputs to fund
   * the outputs specified in the template. There are three ways a user can
   * specify what we call the template (a list of inputs and outputs to use in
   * the PSBT): Either as a PSBT packet directly with no coin selection (using
   * the legacy "psbt" field), a PSBT with advanced coin selection support (using
   * the new "coin_select" field) or as a raw RPC message (using the "raw"
   * field).
   * The legacy "psbt" and "raw" modes, the following restrictions apply:
   * 1. If there are no inputs specified in the template, coin selection is
   * performed automatically.
   * 2. If the template does contain any inputs, it is assumed that full
   * coin selection happened externally and no additional inputs are added. If
   * the specified inputs aren't enough to fund the outputs with the given fee
   * rate, an error is returned.
   *
   * The new "coin_select" mode does not have these restrictions and allows the
   * user to specify a PSBT with inputs and outputs and still perform coin
   * selection on top of that.
   * For all modes this RPC requires any inputs that are specified to be locked
   * by the user (if they belong to this node in the first place).
   *
   * After either selecting or verifying the inputs, all input UTXOs are locked
   * with an internal app ID.
   *
   * NOTE: If this method returns without an error, it is the caller's
   * responsibility to either spend the locked UTXOs (by finalizing and then
   * publishing the transaction) or to unlock/release the locked UTXOs in case of
   * an error on the caller's side.
   */
  async fundPsbt(
    request: RPC.FundPsbtRequestPartial = {}
  ): Promise<RPC.FundPsbtResponse> {
    return promisify(this.client.FundPsbt.bind(this.client))(request);
  }

  /**
   * SignPsbt expects a partial transaction with all inputs and outputs fully
   * declared and tries to sign all unsigned inputs that have all required fields
   * (UTXO information, BIP32 derivation information, witness or sig scripts)
   * set.
   * If no error is returned, the PSBT is ready to be given to the next signer or
   * to be finalized if lnd was the last signer.
   *
   * NOTE: This RPC only signs inputs (and only those it can sign), it does not
   * perform any other tasks (such as coin selection, UTXO locking or
   * input/output/fee value validation, PSBT finalization). Any input that is
   * incomplete will be skipped.
   */
  async signPsbt(
    request: RPC.SignPsbtRequestPartial = {}
  ): Promise<RPC.SignPsbtResponse> {
    return promisify(this.client.SignPsbt.bind(this.client))(request);
  }

  /**
   * lncli: `wallet psbt finalize`
   * FinalizePsbt expects a partial transaction with all inputs and outputs fully
   * declared and tries to sign all inputs that belong to the wallet. Lnd must be
   * the last signer of the transaction. That means, if there are any unsigned
   * non-witness inputs or inputs without UTXO information attached or inputs
   * without witness data that do not belong to lnd's wallet, this method will
   * fail. If no error is returned, the PSBT is ready to be extracted and the
   * final TX within to be broadcast.
   *
   * NOTE: This method does NOT publish the transaction once finalized. It is the
   * caller's responsibility to either publish the transaction on success or
   * unlock/release any locked UTXOs in case of an error in this method.
   */
  async finalizePsbt(
    request: RPC.FinalizePsbtRequestPartial = {}
  ): Promise<RPC.FinalizePsbtResponse> {
    return promisify(this.client.FinalizePsbt.bind(this.client))(request);
  }
}
