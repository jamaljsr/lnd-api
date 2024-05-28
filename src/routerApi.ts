import { ClientDuplexStream, ClientReadableStream } from '@grpc/grpc-js';
import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/router';

/**
 * API interface for lnd's Router RPC sub-server.
 */
export class RouterApi {
  /**
   * Create a new RouterApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'routerrpc/router.proto',
      options
    );

    return new RouterApi(
      new proto.routerrpc.Router(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.RouterClient;

  constructor(client: RPC.RouterClient) {
    this.client = client;
  }

  /**
   * SendPaymentV2 attempts to route a payment described by the passed
   * PaymentRequest to the final destination. The call returns a stream of
   * payment updates. When using this RPC, make sure to set a fee limit, as the
   * default routing fee limit is 0 sats. Without a non-zero fee limit only
   * routes without fees will be attempted which often fails with
   * FAILURE_REASON_NO_ROUTE.
   */
  sendPaymentV2(
    request: RPC.SendPaymentRequestPartial = {}
  ): ClientReadableStream<RPC.Payment> {
    return this.client.SendPaymentV2(request);
  }

  /**
   * lncli: `trackpayment`
   * TrackPaymentV2 returns an update stream for the payment identified by the
   * payment hash.
   */
  trackPaymentV2(
    request: RPC.TrackPaymentRequestPartial = {}
  ): ClientReadableStream<RPC.Payment> {
    return this.client.TrackPaymentV2(request);
  }

  /**
   * TrackPayments returns an update stream for every payment that is not in a
   * terminal state. Note that if payments are in-flight while starting a new
   * subscription, the start of the payment stream could produce out-of-order
   * and/or duplicate events. In order to get updates for every in-flight
   * payment attempt make sure to subscribe to this method before initiating any
   * payments.
   */
  trackPayments(
    request: RPC.TrackPaymentsRequestPartial = {}
  ): ClientReadableStream<RPC.Payment> {
    return this.client.TrackPayments(request);
  }

  /**
   * EstimateRouteFee allows callers to obtain a lower bound w.r.t how much it
   * may cost to send an HTLC to the target end destination.
   */
  async estimateRouteFee(
    request: RPC.RouteFeeRequestPartial = {}
  ): Promise<RPC.RouteFeeResponse> {
    return promisify(this.client.EstimateRouteFee.bind(this.client))(request);
  }

  /**
   * Deprecated, use SendToRouteV2. SendToRoute attempts to make a payment via
   * the specified route. This method differs from SendPayment in that it
   * allows users to specify a full route manually. This can be used for
   * things like rebalancing, and atomic swaps. It differs from the newer
   * SendToRouteV2 in that it doesn't return the full HTLC information.
   */
  async sendToRoute(
    request: RPC.SendToRouteRequestPartial = {}
  ): Promise<RPC.SendToRouteResponse> {
    return promisify(this.client.SendToRoute.bind(this.client))(request);
  }

  /**
   * SendToRouteV2 attempts to make a payment via the specified route. This
   * method differs from SendPayment in that it allows users to specify a full
   * route manually. This can be used for things like rebalancing, and atomic
   * swaps.
   */
  async sendToRouteV2(
    request: RPC.SendToRouteRequestPartial = {}
  ): Promise<RPC.HTLCAttempt> {
    return promisify(this.client.SendToRouteV2.bind(this.client))(request);
  }

  /**
   * lncli: `resetmc`
   * ResetMissionControl clears all mission control state and starts with a clean
   * slate.
   */
  async resetMissionControl(
    request: RPC.ResetMissionControlRequestPartial = {}
  ): Promise<RPC.ResetMissionControlResponse> {
    return promisify(this.client.ResetMissionControl.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `querymc`
   * QueryMissionControl exposes the internal mission control state to callers.
   * It is a development feature.
   */
  async queryMissionControl(
    request: RPC.QueryMissionControlRequestPartial = {}
  ): Promise<RPC.QueryMissionControlResponse> {
    return promisify(this.client.QueryMissionControl.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `importmc`
   * XImportMissionControl is an experimental API that imports the state provided
   * to the internal mission control's state, using all results which are more
   * recent than our existing values. These values will only be imported
   * in-memory, and will not be persisted across restarts.
   */
  async xImportMissionControl(
    request: RPC.XImportMissionControlRequestPartial = {}
  ): Promise<RPC.XImportMissionControlResponse> {
    return promisify(this.client.XImportMissionControl.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `getmccfg`
   * GetMissionControlConfig returns mission control's current config.
   */
  async getMissionControlConfig(
    request: RPC.GetMissionControlConfigRequestPartial = {}
  ): Promise<RPC.GetMissionControlConfigResponse> {
    return promisify(this.client.GetMissionControlConfig.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `setmccfg`
   * SetMissionControlConfig will set mission control's config, if the config
   * provided is valid.
   */
  async setMissionControlConfig(
    request: RPC.SetMissionControlConfigRequestPartial = {}
  ): Promise<RPC.SetMissionControlConfigResponse> {
    return promisify(this.client.SetMissionControlConfig.bind(this.client))(
      request
    );
  }

  /**
   * lncli: `queryprob`
   * Deprecated. QueryProbability returns the current success probability
   * estimate for a given node pair and amount. The call returns a zero success
   * probability if no channel is available or if the amount violates min/max
   * HTLC constraints.
   */
  async queryProbability(
    request: RPC.QueryProbabilityRequestPartial = {}
  ): Promise<RPC.QueryProbabilityResponse> {
    return promisify(this.client.QueryProbability.bind(this.client))(request);
  }

  /**
   * lncli: `buildroute`
   * BuildRoute builds a fully specified route based on a list of hop public
   * keys. It retrieves the relevant channel policies from the graph in order to
   * calculate the correct fees and time locks.
   * Note that LND will use its default final_cltv_delta if no value is supplied.
   * Make sure to add the correct final_cltv_delta depending on the invoice
   * restriction. Moreover the caller has to make sure to provide the
   * payment_addr if the route is paying an invoice which signaled it.
   */
  async buildRoute(
    request: RPC.BuildRouteRequestPartial = {}
  ): Promise<RPC.BuildRouteResponse> {
    return promisify(this.client.BuildRoute.bind(this.client))(request);
  }

  /**
   * SubscribeHtlcEvents creates a uni-directional stream from the server to
   * the client which delivers a stream of htlc events.
   */
  subscribeHtlcEvents(
    request: RPC.SubscribeHtlcEventsRequestPartial = {}
  ): ClientReadableStream<RPC.HtlcEvent> {
    return this.client.SubscribeHtlcEvents(request);
  }

  /**
   * Deprecated, use SendPaymentV2. SendPayment attempts to route a payment
   * described by the passed PaymentRequest to the final destination. The call
   * returns a stream of payment status updates.
   */
  sendPayment(
    request: RPC.SendPaymentRequestPartial = {}
  ): ClientReadableStream<RPC.PaymentStatus> {
    return this.client.SendPayment(request);
  }

  /**
   * Deprecated, use TrackPaymentV2. TrackPayment returns an update stream for
   * the payment identified by the payment hash.
   */
  trackPayment(
    request: RPC.TrackPaymentRequestPartial = {}
  ): ClientReadableStream<RPC.PaymentStatus> {
    return this.client.TrackPayment(request);
  }

  /**
   * *
   * HtlcInterceptor dispatches a bi-directional streaming RPC in which
   * Forwarded HTLC requests are sent to the client and the client responds with
   * a boolean that tells LND if this htlc should be intercepted.
   * In case of interception, the htlc can be either settled, cancelled or
   * resumed later by using the ResolveHoldForward endpoint.
   */
  htlcInterceptor(): ClientDuplexStream<
    RPC.ForwardHtlcInterceptResponsePartial,
    RPC.ForwardHtlcInterceptRequest
  > {
    return this.client.HtlcInterceptor();
  }

  /**
   * lncli: `updatechanstatus`
   * UpdateChanStatus attempts to manually set the state of a channel
   * (enabled, disabled, or auto). A manual "disable" request will cause the
   * channel to stay disabled until a subsequent manual request of either
   * "enable" or "auto".
   */
  async updateChanStatus(
    request: RPC.UpdateChanStatusRequestPartial = {}
  ): Promise<RPC.UpdateChanStatusResponse> {
    return promisify(this.client.UpdateChanStatus.bind(this.client))(request);
  }
}
