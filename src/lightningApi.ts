import { ClientDuplexStream, ClientReadableStream } from '@grpc/grpc-js';
import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/lightning';

/**
 * API interface for lnd's Lightning RPC sub-server.
 */
export class LightningApi {
  /**
   * Create a new LightningApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'lightning.proto',
      options
    );

    return new LightningApi(
      new proto.lnrpc.Lightning(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.LightningClient;

  constructor(client: RPC.LightningClient) {
    this.client = client;
  }
  /**
   * lncli: `walletbalance`
   * WalletBalance returns total unspent outputs(confirmed and unconfirmed), all
   * confirmed unspent outputs and all unconfirmed unspent outputs under control
   * of the wallet.
   */
  async walletBalance(
    request: RPC.WalletBalanceRequestPartial = {}
  ): Promise<RPC.WalletBalanceResponse> {
    return promisify(this.client.WalletBalance.bind(this.client))(request);
  }

  /**
   * lncli: `channelbalance`
   * ChannelBalance returns a report on the total funds across all open channels,
   * categorized in local/remote, pending local/remote and unsettled local/remote
   * balances.
   */
  async channelBalance(
    request: RPC.ChannelBalanceRequestPartial = {}
  ): Promise<RPC.ChannelBalanceResponse> {
    return promisify(this.client.ChannelBalance.bind(this.client))(request);
  }

  /**
   * lncli: `listchaintxns`
   * GetTransactions returns a list describing all the known transactions
   * relevant to the wallet.
   */
  async getTransactions(
    request: RPC.GetTransactionsRequestPartial = {}
  ): Promise<RPC.TransactionDetails> {
    return promisify(this.client.GetTransactions.bind(this.client))(request);
  }

  /**
   * lncli: `estimatefee`
   * EstimateFee asks the chain backend to estimate the fee rate and total fees
   * for a transaction that pays to multiple specified outputs.
   *
   * When using REST, the `AddrToAmount` map type can be set by appending
   * `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this
   * map type doesn't appear in the REST API documentation because of a bug in
   * the grpc-gateway library.
   */
  async estimateFee(
    request: RPC.EstimateFeeRequestPartial = {}
  ): Promise<RPC.EstimateFeeResponse> {
    return promisify(this.client.EstimateFee.bind(this.client))(request);
  }

  /**
   * lncli: `sendcoins`
   * SendCoins executes a request to send coins to a particular address. Unlike
   * SendMany, this RPC call only allows creating a single output at a time. If
   * neither target_conf, or sat_per_vbyte are set, then the internal wallet will
   * consult its fee model to determine a fee for the default confirmation
   * target.
   */
  async sendCoins(
    request: RPC.SendCoinsRequestPartial = {}
  ): Promise<RPC.SendCoinsResponse> {
    return promisify(this.client.SendCoins.bind(this.client))(request);
  }

  /**
   * lncli: `listunspent`
   * Deprecated, use walletrpc.ListUnspent instead.
   *
   * ListUnspent returns a list of all utxos spendable by the wallet with a
   * number of confirmations between the specified minimum and maximum.
   */
  async listUnspent(
    request: RPC.ListUnspentRequestPartial = {}
  ): Promise<RPC.ListUnspentResponse> {
    return promisify(this.client.ListUnspent.bind(this.client))(request);
  }

  /**
   * SubscribeTransactions creates a uni-directional stream from the server to
   * the client in which any newly discovered transactions relevant to the
   * wallet are sent over.
   */
  subscribeTransactions(
    request: RPC.GetTransactionsRequestPartial = {}
  ): ClientReadableStream<RPC.Transaction> {
    return this.client.SubscribeTransactions(request);
  }

  /**
   * lncli: `sendmany`
   * SendMany handles a request for a transaction that creates multiple specified
   * outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then
   * the internal wallet will consult its fee model to determine a fee for the
   * default confirmation target.
   */
  async sendMany(
    request: RPC.SendManyRequestPartial = {}
  ): Promise<RPC.SendManyResponse> {
    return promisify(this.client.SendMany.bind(this.client))(request);
  }

  /**
   * lncli: `newaddress`
   * NewAddress creates a new address under control of the local wallet.
   */
  async newAddress(
    request: RPC.NewAddressRequestPartial = {}
  ): Promise<RPC.NewAddressResponse> {
    return promisify(this.client.NewAddress.bind(this.client))(request);
  }

  /**
   * lncli: `signmessage`
   * SignMessage signs a message with this node's private key. The returned
   * signature string is `zbase32` encoded and pubkey recoverable, meaning that
   * only the message digest and signature are needed for verification.
   */
  async signMessage(
    request: RPC.SignMessageRequestPartial = {}
  ): Promise<RPC.SignMessageResponse> {
    return promisify(this.client.SignMessage.bind(this.client))(request);
  }

  /**
   * lncli: `verifymessage`
   * VerifyMessage verifies a signature over a message and recovers the signer's
   * public key. The signature is only deemed valid if the recovered public key
   * corresponds to a node key in the public Lightning network. The signature
   * must be zbase32 encoded and signed by an active node in the resident node's
   * channel database. In addition to returning the validity of the signature,
   * VerifyMessage also returns the recovered pubkey from the signature.
   */
  async verifyMessage(
    request: RPC.VerifyMessageRequestPartial = {}
  ): Promise<RPC.VerifyMessageResponse> {
    return promisify(this.client.VerifyMessage.bind(this.client))(request);
  }

  /**
   * lncli: `connect`
   * ConnectPeer attempts to establish a connection to a remote peer. This is at
   * the networking level, and is used for communication between nodes. This is
   * distinct from establishing a channel with a peer.
   */
  async connectPeer(
    request: RPC.ConnectPeerRequestPartial = {}
  ): Promise<RPC.ConnectPeerResponse> {
    return promisify(this.client.ConnectPeer.bind(this.client))(request);
  }

  /**
   * lncli: `disconnect`
   * DisconnectPeer attempts to disconnect one peer from another identified by a
   * given pubKey. In the case that we currently have a pending or active channel
   * with the target peer, then this action will be not be allowed.
   */
  async disconnectPeer(
    request: RPC.DisconnectPeerRequestPartial = {}
  ): Promise<RPC.DisconnectPeerResponse> {
    return promisify(this.client.DisconnectPeer.bind(this.client))(request);
  }

  /**
   * lncli: `listpeers`
   * ListPeers returns a verbose listing of all currently active peers.
   */
  async listPeers(
    request: RPC.ListPeersRequestPartial = {}
  ): Promise<RPC.ListPeersResponse> {
    return promisify(this.client.ListPeers.bind(this.client))(request);
  }

  /**
   * SubscribePeerEvents creates a uni-directional stream from the server to
   * the client in which any events relevant to the state of peers are sent
   * over. Events include peers going online and offline.
   */
  subscribePeerEvents(
    request: RPC.PeerEventSubscriptionPartial = {}
  ): ClientReadableStream<RPC.PeerEvent> {
    return this.client.SubscribePeerEvents(request);
  }

  /**
   * lncli: `getinfo`
   * GetInfo returns general information concerning the lightning node including
   * it's identity pubkey, alias, the chains it is connected to, and information
   * concerning the number of open+pending channels.
   */
  async getInfo(
    request: RPC.GetInfoRequestPartial = {}
  ): Promise<RPC.GetInfoResponse> {
    return promisify(this.client.GetInfo.bind(this.client))(request);
  }

  /**
   * lncli: 'getdebuginfo'
   * GetDebugInfo returns debug information concerning the state of the daemon
   * and its subsystems. This includes the full configuration and the latest log
   * entries from the log file.
   */
  async getDebugInfo(
    request: RPC.GetDebugInfoRequestPartial = {}
  ): Promise<RPC.GetDebugInfoResponse> {
    return promisify(this.client.GetDebugInfo.bind(this.client))(request);
  }

  /**
   * * lncli: `getrecoveryinfo`
   * GetRecoveryInfo returns information concerning the recovery mode including
   * whether it's in a recovery mode, whether the recovery is finished, and the
   * progress made so far.
   */
  async getRecoveryInfo(
    request: RPC.GetRecoveryInfoRequestPartial = {}
  ): Promise<RPC.GetRecoveryInfoResponse> {
    return promisify(this.client.GetRecoveryInfo.bind(this.client))(request);
  }

  /**
   * lncli: `pendingchannels`
   * PendingChannels returns a list of all the channels that are currently
   * considered "pending". A channel is pending if it has finished the funding
   * workflow and is waiting for confirmations for the funding txn, or is in the
   * process of closure, either initiated cooperatively or non-cooperatively.
   */
  async pendingChannels(
    request: RPC.PendingChannelsRequestPartial = {}
  ): Promise<RPC.PendingChannelsResponse> {
    return promisify(this.client.PendingChannels.bind(this.client))(request);
  }

  /**
   * lncli: `listchannels`
   * ListChannels returns a description of all the open channels that this node
   * is a participant in.
   */
  async listChannels(
    request: RPC.ListChannelsRequestPartial = {}
  ): Promise<RPC.ListChannelsResponse> {
    return promisify(this.client.ListChannels.bind(this.client))(request);
  }

  /**
   * SubscribeChannelEvents creates a uni-directional stream from the server to
   * the client in which any updates relevant to the state of the channels are
   * sent over. Events include new active channels, inactive channels, and closed
   * channels.
   */
  subscribeChannelEvents(
    request: RPC.ChannelEventSubscriptionPartial = {}
  ): ClientReadableStream<RPC.ChannelEventUpdate> {
    return this.client.SubscribeChannelEvents(request);
  }

  /**
   * lncli: `closedchannels`
   * ClosedChannels returns a description of all the closed channels that
   * this node was a participant in.
   */
  async closedChannels(
    request: RPC.ClosedChannelsRequestPartial = {}
  ): Promise<RPC.ClosedChannelsResponse> {
    return promisify(this.client.ClosedChannels.bind(this.client))(request);
  }

  /**
   * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This
   * call is meant to be consumed by clients to the REST proxy. As with all
   * other sync calls, all byte slices are intended to be populated as hex
   * encoded strings.
   */
  async openChannelSync(
    request: RPC.OpenChannelRequestPartial = {}
  ): Promise<RPC.ChannelPoint> {
    return promisify(this.client.OpenChannelSync.bind(this.client))(request);
  }

  /**
   * lncli: `openchannel`
   * OpenChannel attempts to open a singly funded channel specified in the
   * request to a remote peer. Users are able to specify a target number of
   * blocks that the funding transaction should be confirmed in, or a manual fee
   * rate to us for the funding transaction. If neither are specified, then a
   * lax block confirmation target is used. Each OpenStatusUpdate will return
   * the pending channel ID of the in-progress channel. Depending on the
   * arguments specified in the OpenChannelRequest, this pending channel ID can
   * then be used to manually progress the channel funding flow.
   */
  openChannel(
    request: RPC.OpenChannelRequestPartial = {}
  ): ClientReadableStream<RPC.OpenStatusUpdate> {
    return this.client.OpenChannel(request);
  }

  /**
   * lncli: `batchopenchannel`
   * BatchOpenChannel attempts to open multiple single-funded channels in a
   * single transaction in an atomic way. This means either all channel open
   * requests succeed at once or all attempts are aborted if any of them fail.
   * This is the safer variant of using PSBTs to manually fund a batch of
   * channels through the OpenChannel RPC.
   */
  async batchOpenChannel(
    request: RPC.BatchOpenChannelRequestPartial = {}
  ): Promise<RPC.BatchOpenChannelResponse> {
    return promisify(this.client.BatchOpenChannel.bind(this.client))(request);
  }

  /**
   * FundingStateStep is an advanced funding related call that allows the caller
   * to either execute some preparatory steps for a funding workflow, or
   * manually progress a funding workflow. The primary way a funding flow is
   * identified is via its pending channel ID. As an example, this method can be
   * used to specify that we're expecting a funding flow for a particular
   * pending channel ID, for which we need to use specific parameters.
   * Alternatively, this can be used to interactively drive PSBT signing for
   * funding for partially complete funding transactions.
   */
  async fundingStateStep(
    request: RPC.FundingTransitionMsgPartial = {}
  ): Promise<RPC.FundingStateStepResp> {
    return promisify(this.client.FundingStateStep.bind(this.client))(request);
  }

  /**
   * ChannelAcceptor dispatches a bi-directional streaming RPC in which
   * OpenChannel requests are sent to the client and the client responds with
   * a boolean that tells LND whether or not to accept the channel. This allows
   * node operators to specify their own criteria for accepting inbound channels
   * through a single persistent connection.
   */
  channelAcceptor(): ClientDuplexStream<
    RPC.ChannelAcceptResponsePartial,
    RPC.ChannelAcceptRequest
  > {
    return this.client.ChannelAcceptor();
  }

  /**
   * lncli: `closechannel`
   * CloseChannel attempts to close an active channel identified by its channel
   * outpoint (ChannelPoint). The actions of this method can additionally be
   * augmented to attempt a force close after a timeout period in the case of an
   * inactive peer. If a non-force close (cooperative closure) is requested,
   * then the user can specify either a target number of blocks until the
   * closure transaction is confirmed, or a manual fee rate. If neither are
   * specified, then a default lax, block confirmation target is used.
   */
  closeChannel(
    request: RPC.CloseChannelRequestPartial = {}
  ): ClientReadableStream<RPC.CloseStatusUpdate> {
    return this.client.CloseChannel(request);
  }

  /**
   * lncli: `abandonchannel`
   * AbandonChannel removes all channel state from the database except for a
   * close summary. This method can be used to get rid of permanently unusable
   * channels due to bugs fixed in newer versions of lnd. This method can also be
   * used to remove externally funded channels where the funding transaction was
   * never broadcast. Only available for non-externally funded channels in dev
   * build.
   */
  async abandonChannel(
    request: RPC.AbandonChannelRequestPartial = {}
  ): Promise<RPC.AbandonChannelResponse> {
    return promisify(this.client.AbandonChannel.bind(this.client))(request);
  }

  /**
   * lncli: `sendpayment`
   * Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a
   * bi-directional streaming RPC for sending payments through the Lightning
   * Network. A single RPC invocation creates a persistent bi-directional
   * stream allowing clients to rapidly send payments through the Lightning
   * Network with a single persistent connection.
   */
  sendPayment(): ClientDuplexStream<RPC.SendRequestPartial, RPC.SendResponse> {
    return this.client.SendPayment();
  }

  /**
   * SendPaymentSync is the synchronous non-streaming version of SendPayment.
   * This RPC is intended to be consumed by clients of the REST proxy.
   * Additionally, this RPC expects the destination's public key and the payment
   * hash (if any) to be encoded as hex strings.
   */
  async sendPaymentSync(
    request: RPC.SendRequestPartial = {}
  ): Promise<RPC.SendResponse> {
    return promisify(this.client.SendPaymentSync.bind(this.client))(request);
  }

  /**
   * lncli: `sendtoroute`
   * Deprecated, use routerrpc.SendToRouteV2. SendToRoute is a bi-directional
   * streaming RPC for sending payment through the Lightning Network. This
   * method differs from SendPayment in that it allows users to specify a full
   * route manually. This can be used for things like rebalancing, and atomic
   * swaps.
   */
  sendToRoute(): ClientDuplexStream<
    RPC.SendToRouteRequestPartial,
    RPC.SendResponse
  > {
    return this.client.SendToRoute();
  }

  /**
   * SendToRouteSync is a synchronous version of SendToRoute. It Will block
   * until the payment either fails or succeeds.
   */
  async sendToRouteSync(
    request: RPC.SendToRouteRequestPartial = {}
  ): Promise<RPC.SendResponse> {
    return promisify(this.client.SendToRouteSync.bind(this.client))(request);
  }

  /**
   * lncli: `addinvoice`
   * AddInvoice attempts to add a new invoice to the invoice database. Any
   * duplicated invoices are rejected, therefore all invoices *must* have a
   * unique payment preimage.
   */
  async addInvoice(
    request: RPC.InvoicePartial = {}
  ): Promise<RPC.AddInvoiceResponse> {
    return promisify(this.client.AddInvoice.bind(this.client))(request);
  }

  /**
   * lncli: `listinvoices`
   * ListInvoices returns a list of all the invoices currently stored within the
   * database. Any active debug invoices are ignored. It has full support for
   * paginated responses, allowing users to query for specific invoices through
   * their add_index. This can be done by using either the first_index_offset or
   * last_index_offset fields included in the response as the index_offset of the
   * next request. By default, the first 100 invoices created will be returned.
   * Backwards pagination is also supported through the Reversed flag.
   */
  async listInvoices(
    request: RPC.ListInvoiceRequestPartial = {}
  ): Promise<RPC.ListInvoiceResponse> {
    return promisify(this.client.ListInvoices.bind(this.client))(request);
  }

  /**
   * lncli: `lookupinvoice`
   * LookupInvoice attempts to look up an invoice according to its payment hash.
   * The passed payment hash *must* be exactly 32 bytes, if not, an error is
   * returned.
   */
  async lookupInvoice(
    request: RPC.PaymentHashPartial = {}
  ): Promise<RPC.Invoice> {
    return promisify(this.client.LookupInvoice.bind(this.client))(request);
  }

  /**
   * SubscribeInvoices returns a uni-directional stream (server -> client) for
   * notifying the client of newly added/settled invoices. The caller can
   * optionally specify the add_index and/or the settle_index. If the add_index
   * is specified, then we'll first start by sending add invoice events for all
   * invoices with an add_index greater than the specified value. If the
   * settle_index is specified, then next, we'll send out all settle events for
   * invoices with a settle_index greater than the specified value. One or both
   * of these fields can be set. If no fields are set, then we'll only send out
   * the latest add/settle events.
   */
  subscribeInvoices(
    request: RPC.InvoiceSubscriptionPartial = {}
  ): ClientReadableStream<RPC.Invoice> {
    return this.client.SubscribeInvoices(request);
  }

  /**
   * lncli: `decodepayreq`
   * DecodePayReq takes an encoded payment request string and attempts to decode
   * it, returning a full description of the conditions encoded within the
   * payment request.
   */
  async decodePayReq(
    request: RPC.PayReqStringPartial = {}
  ): Promise<RPC.PayReq> {
    return promisify(this.client.DecodePayReq.bind(this.client))(request);
  }

  /**
   * lncli: `listpayments`
   * ListPayments returns a list of all outgoing payments.
   */
  async listPayments(
    request: RPC.ListPaymentsRequestPartial = {}
  ): Promise<RPC.ListPaymentsResponse> {
    return promisify(this.client.ListPayments.bind(this.client))(request);
  }

  /**
   * lncli: `deletepayments`
   * DeletePayment deletes an outgoing payment from DB. Note that it will not
   * attempt to delete an In-Flight payment, since that would be unsafe.
   */
  async deletePayment(
    request: RPC.DeletePaymentRequestPartial = {}
  ): Promise<RPC.DeletePaymentResponse> {
    return promisify(this.client.DeletePayment.bind(this.client))(request);
  }

  /**
   * lncli: `deletepayments --all`
   * DeleteAllPayments deletes all outgoing payments from DB. Note that it will
   * not attempt to delete In-Flight payments, since that would be unsafe.
   */
  async deleteAllPayments(
    request: RPC.DeleteAllPaymentsRequestPartial = {}
  ): Promise<RPC.DeleteAllPaymentsResponse> {
    return promisify(this.client.DeleteAllPayments.bind(this.client))(request);
  }

  /**
   * lncli: `describegraph`
   * DescribeGraph returns a description of the latest graph state from the
   * point of view of the node. The graph information is partitioned into two
   * components: all the nodes/vertexes, and all the edges that connect the
   * vertexes themselves. As this is a directed graph, the edges also contain
   * the node directional specific routing policy which includes: the time lock
   * delta, fee information, etc.
   */
  async describeGraph(
    request: RPC.ChannelGraphRequestPartial = {}
  ): Promise<RPC.ChannelGraph> {
    return promisify(this.client.DescribeGraph.bind(this.client))(request);
  }

  /**
   * lncli: `getnodemetrics`
   * GetNodeMetrics returns node metrics calculated from the graph. Currently
   * the only supported metric is betweenness centrality of individual nodes.
   */
  async getNodeMetrics(
    request: RPC.NodeMetricsRequestPartial = {}
  ): Promise<RPC.NodeMetricsResponse> {
    return promisify(this.client.GetNodeMetrics.bind(this.client))(request);
  }

  /**
   * lncli: `getchaninfo`
   * GetChanInfo returns the latest authenticated network announcement for the
   * given channel identified by its channel ID: an 8-byte integer which
   * uniquely identifies the location of transaction's funding output within the
   * blockchain.
   */
  async getChanInfo(
    request: RPC.ChanInfoRequestPartial = {}
  ): Promise<RPC.ChannelEdge> {
    return promisify(this.client.GetChanInfo.bind(this.client))(request);
  }

  /**
   * lncli: `getnodeinfo`
   * GetNodeInfo returns the latest advertised, aggregated, and authenticated
   * channel information for the specified node identified by its public key.
   */
  async getNodeInfo(
    request: RPC.NodeInfoRequestPartial = {}
  ): Promise<RPC.NodeInfo> {
    return promisify(this.client.GetNodeInfo.bind(this.client))(request);
  }

  /**
   * lncli: `queryroutes`
   * QueryRoutes attempts to query the daemon's Channel Router for a possible
   * route to a target destination capable of carrying a specific amount of
   * satoshis. The returned route contains the full details required to craft and
   * send an HTLC, also including the necessary information that should be
   * present within the Sphinx packet encapsulated within the HTLC.
   *
   * When using REST, the `dest_custom_records` map type can be set by appending
   * `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>`
   * to the URL. Unfortunately this map type doesn't appear in the REST API
   * documentation because of a bug in the grpc-gateway library.
   */
  async queryRoutes(
    request: RPC.QueryRoutesRequestPartial = {}
  ): Promise<RPC.QueryRoutesResponse> {
    return promisify(this.client.QueryRoutes.bind(this.client))(request);
  }

  /**
   * lncli: `getnetworkinfo`
   * GetNetworkInfo returns some basic stats about the known channel graph from
   * the point of view of the node.
   */
  async getNetworkInfo(
    request: RPC.NetworkInfoRequestPartial = {}
  ): Promise<RPC.NetworkInfo> {
    return promisify(this.client.GetNetworkInfo.bind(this.client))(request);
  }

  /**
   * lncli: `stop`
   * StopDaemon will send a shutdown request to the interrupt handler, triggering
   * a graceful shutdown of the daemon.
   */
  async stopDaemon(
    request: RPC.StopRequestPartial = {}
  ): Promise<RPC.StopResponse> {
    return promisify(this.client.StopDaemon.bind(this.client))(request);
  }

  /**
   * SubscribeChannelGraph launches a streaming RPC that allows the caller to
   * receive notifications upon any changes to the channel graph topology from
   * the point of view of the responding node. Events notified include: new
   * nodes coming online, nodes updating their authenticated attributes, new
   * channels being advertised, updates in the routing policy for a directional
   * channel edge, and when channels are closed on-chain.
   */
  subscribeChannelGraph(
    request: RPC.GraphTopologySubscriptionPartial = {}
  ): ClientReadableStream<RPC.GraphTopologyUpdate> {
    return this.client.SubscribeChannelGraph(request);
  }

  /**
   * lncli: `debuglevel`
   * DebugLevel allows a caller to programmatically set the logging verbosity of
   * lnd. The logging can be targeted according to a coarse daemon-wide logging
   * level, or in a granular fashion to specify the logging for a target
   * sub-system.
   */
  async debugLevel(
    request: RPC.DebugLevelRequestPartial = {}
  ): Promise<RPC.DebugLevelResponse> {
    return promisify(this.client.DebugLevel.bind(this.client))(request);
  }

  /**
   * lncli: `feereport`
   * FeeReport allows the caller to obtain a report detailing the current fee
   * schedule enforced by the node globally for each channel.
   */
  async feeReport(
    request: RPC.FeeReportRequestPartial = {}
  ): Promise<RPC.FeeReportResponse> {
    return promisify(this.client.FeeReport.bind(this.client))(request);
  }

  /**
   * lncli: `updatechanpolicy`
   * UpdateChannelPolicy allows the caller to update the fee schedule and
   * channel policies for all channels globally, or a particular channel.
   */
  async updateChannelPolicy(
    request: RPC.PolicyUpdateRequestPartial = {}
  ): Promise<RPC.PolicyUpdateResponse> {
    return promisify(this.client.UpdateChannelPolicy.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `fwdinghistory`
   * ForwardingHistory allows the caller to query the htlcswitch for a record of
   * all HTLCs forwarded within the target time range, and integer offset
   * within that time range, for a maximum number of events. If no maximum number
   * of events is specified, up to 100 events will be returned. If no time-range
   * is specified, then events will be returned in the order that they occured.
   *
   * A list of forwarding events are returned. The size of each forwarding event
   * is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB.
   * As a result each message can only contain 50k entries. Each response has
   * the index offset of the last entry. The index offset can be provided to the
   * request to allow the caller to skip a series of records.
   */
  async forwardingHistory(
    request: RPC.ForwardingHistoryRequestPartial = {}
  ): Promise<RPC.ForwardingHistoryResponse> {
    return promisify(this.client.ForwardingHistory.bind(this.client))(request);
  }

  /**
   * lncli: `exportchanbackup`
   * ExportChannelBackup attempts to return an encrypted static channel backup
   * for the target channel identified by it channel point. The backup is
   * encrypted with a key generated from the aezeed seed of the user. The
   * returned backup can either be restored using the RestoreChannelBackup
   * method once lnd is running, or via the InitWallet and UnlockWallet methods
   * from the WalletUnlocker service.
   */
  async exportChannelBackup(
    request: RPC.ExportChannelBackupRequestPartial = {}
  ): Promise<RPC.ChannelBackup> {
    return promisify(this.client.ExportChannelBackup.bind(this.client))(
      request
    );
  }

  /**
   * ExportAllChannelBackups returns static channel backups for all existing
   * channels known to lnd. A set of regular singular static channel backups for
   * each channel are returned. Additionally, a multi-channel backup is returned
   * as well, which contains a single encrypted blob containing the backups of
   * each channel.
   */
  async exportAllChannelBackups(
    request: RPC.ChanBackupExportRequestPartial = {}
  ): Promise<RPC.ChanBackupSnapshot> {
    return promisify(this.client.ExportAllChannelBackups.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `verifychanbackup`
   * VerifyChanBackup allows a caller to verify the integrity of a channel backup
   * snapshot. This method will accept either a packed Single or a packed Multi.
   * Specifying both will result in an error.
   */
  async verifyChanBackup(
    request: RPC.ChanBackupSnapshotPartial = {}
  ): Promise<RPC.VerifyChanBackupResponse> {
    return promisify(this.client.VerifyChanBackup.bind(this.client))(request);
  }

  /**
   * lncli: `restorechanbackup`
   * RestoreChannelBackups accepts a set of singular channel backups, or a
   * single encrypted multi-chan backup and attempts to recover any funds
   * remaining within the channel. If we are able to unpack the backup, then the
   * new channel will be shown under listchannels, as well as pending channels.
   */
  async restoreChannelBackups(
    request: RPC.RestoreChanBackupRequestPartial = {}
  ): Promise<RPC.RestoreBackupResponse> {
    return promisify(this.client.RestoreChannelBackups.bind(this.client))(
      request
    );
  }

  /**
   * SubscribeChannelBackups allows a client to sub-subscribe to the most up to
   * date information concerning the state of all channel backups. Each time a
   * new channel is added, we return the new set of channels, along with a
   * multi-chan backup containing the backup info for all channels. Each time a
   * channel is closed, we send a new update, which contains new new chan back
   * ups, but the updated set of encrypted multi-chan backups with the closed
   * channel(s) removed.
   */
  subscribeChannelBackups(
    request: RPC.ChannelBackupSubscriptionPartial = {}
  ): ClientReadableStream<RPC.ChanBackupSnapshot> {
    return this.client.SubscribeChannelBackups(request);
  }

  /**
   * lncli: `bakemacaroon`
   * BakeMacaroon allows the creation of a new macaroon with custom read and
   * write permissions. No first-party caveats are added since this can be done
   * offline.
   */
  async bakeMacaroon(
    request: RPC.BakeMacaroonRequestPartial = {}
  ): Promise<RPC.BakeMacaroonResponse> {
    return promisify(this.client.BakeMacaroon.bind(this.client))(request);
  }

  /**
   * lncli: `listmacaroonids`
   * ListMacaroonIDs returns all root key IDs that are in use.
   */
  async listMacaroonIDs(
    request: RPC.ListMacaroonIDsRequestPartial = {}
  ): Promise<RPC.ListMacaroonIDsResponse> {
    return promisify(this.client.ListMacaroonIDs.bind(this.client))(request);
  }

  /**
   * lncli: `deletemacaroonid`
   * DeleteMacaroonID deletes the specified macaroon ID and invalidates all
   * macaroons derived from that ID.
   */
  async deleteMacaroonID(
    request: RPC.DeleteMacaroonIDRequestPartial = {}
  ): Promise<RPC.DeleteMacaroonIDResponse> {
    return promisify(this.client.DeleteMacaroonID.bind(this.client))(request);
  }

  /**
   * lncli: `listpermissions`
   * ListPermissions lists all RPC method URIs and their required macaroon
   * permissions to access them.
   */
  async listPermissions(
    request: RPC.ListPermissionsRequestPartial = {}
  ): Promise<RPC.ListPermissionsResponse> {
    return promisify(this.client.ListPermissions.bind(this.client))(request);
  }

  /**
   * CheckMacaroonPermissions checks whether a request follows the constraints
   * imposed on the macaroon and that the macaroon is authorized to follow the
   * provided permissions.
   */
  async checkMacaroonPermissions(
    request: RPC.CheckMacPermRequestPartial = {}
  ): Promise<RPC.CheckMacPermResponse> {
    return promisify(this.client.CheckMacaroonPermissions.bind(this.client))(
      request
    );
  }

  /**
   * RegisterRPCMiddleware adds a new gRPC middleware to the interceptor chain. A
   * gRPC middleware is software component external to lnd that aims to add
   * additional business logic to lnd by observing/intercepting/validating
   * incoming gRPC client requests and (if needed) replacing/overwriting outgoing
   * messages before they're sent to the client. When registering the middleware
   * must identify itself and indicate what custom macaroon caveats it wants to
   * be responsible for. Only requests that contain a macaroon with that specific
   * custom caveat are then sent to the middleware for inspection. The other
   * option is to register for the read-only mode in which all requests/responses
   * are forwarded for interception to the middleware but the middleware is not
   * allowed to modify any responses. As a security measure, _no_ middleware can
   * modify responses for requests made with _unencumbered_ macaroons!
   */
  registerRPCMiddleware(): ClientDuplexStream<
    RPC.RPCMiddlewareResponsePartial,
    RPC.RPCMiddlewareRequest
  > {
    return this.client.RegisterRPCMiddleware();
  }

  /**
   * lncli: `sendcustom`
   * SendCustomMessage sends a custom peer message.
   */
  async sendCustomMessage(
    request: RPC.SendCustomMessageRequestPartial = {}
  ): Promise<RPC.SendCustomMessageResponse> {
    return promisify(this.client.SendCustomMessage.bind(this.client))(request);
  }

  /**
   * lncli: `subscribecustom`
   * SubscribeCustomMessages subscribes to a stream of incoming custom peer
   * messages.
   *
   * To include messages with type outside of the custom range (>= 32768) lnd
   * needs to be compiled with  the `dev` build tag, and the message type to
   * override should be specified in lnd's experimental protocol configuration.
   */
  subscribeCustomMessages(
    request: RPC.SubscribeCustomMessagesRequestPartial = {}
  ): ClientReadableStream<RPC.CustomMessage> {
    return this.client.SubscribeCustomMessages(request);
  }

  /**
   * lncli: `listaliases`
   * ListAliases returns the set of all aliases that have ever existed with
   * their confirmed SCID (if it exists) and/or the base SCID (in the case of
   * zero conf).
   */
  async listAliases(
    request: RPC.ListAliasesRequestPartial = {}
  ): Promise<RPC.ListAliasesResponse> {
    return promisify(this.client.ListAliases.bind(this.client))(request);
  }

  /**
   * LookupHtlcResolution retrieves a final htlc resolution from the database.
   * If the htlc has no final resolution yet, a NotFound grpc status code is
   * returned.
   */
  async lookupHtlcResolution(
    request: RPC.LookupHtlcResolutionRequestPartial = {}
  ): Promise<RPC.LookupHtlcResolutionResponse> {
    return promisify(this.client.LookupHtlcResolution.bind(this.client))(
      request
    );
  }
}
