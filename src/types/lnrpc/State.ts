// Original file: protos/stateservice.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetStateRequestPartial as _lnrpc_GetStateRequestPartial, GetStateRequest as _lnrpc_GetStateRequest } from '../lnrpc/GetStateRequest';
import type { GetStateResponsePartial as _lnrpc_GetStateResponsePartial, GetStateResponse as _lnrpc_GetStateResponse } from '../lnrpc/GetStateResponse';
import type { SubscribeStateRequestPartial as _lnrpc_SubscribeStateRequestPartial, SubscribeStateRequest as _lnrpc_SubscribeStateRequest } from '../lnrpc/SubscribeStateRequest';
import type { SubscribeStateResponsePartial as _lnrpc_SubscribeStateResponsePartial, SubscribeStateResponse as _lnrpc_SubscribeStateResponse } from '../lnrpc/SubscribeStateResponse';

export interface StateClient extends grpc.Client {
  GetState(argument: _lnrpc_GetStateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  GetState(argument: _lnrpc_GetStateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  GetState(argument: _lnrpc_GetStateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  GetState(argument: _lnrpc_GetStateRequestPartial, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequestPartial, callback: grpc.requestCallback<_lnrpc_GetStateResponse>): grpc.ClientUnaryCall;
  
  SubscribeState(argument: _lnrpc_SubscribeStateRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse>;
  SubscribeState(argument: _lnrpc_SubscribeStateRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse>;
  subscribeState(argument: _lnrpc_SubscribeStateRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse>;
  subscribeState(argument: _lnrpc_SubscribeStateRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse>;
  
}

export interface StateHandlers extends grpc.UntypedServiceImplementation {
  GetState: grpc.handleUnaryCall<_lnrpc_GetStateRequest, _lnrpc_GetStateResponsePartial>;
  
  SubscribeState: grpc.handleServerStreamingCall<_lnrpc_SubscribeStateRequest, _lnrpc_SubscribeStateResponsePartial>;
  
}

export interface StateDefinition extends grpc.ServiceDefinition {
  GetState: MethodDefinition<_lnrpc_GetStateRequestPartial, _lnrpc_GetStateResponsePartial, _lnrpc_GetStateRequest, _lnrpc_GetStateResponse>
  SubscribeState: MethodDefinition<_lnrpc_SubscribeStateRequestPartial, _lnrpc_SubscribeStateResponsePartial, _lnrpc_SubscribeStateRequest, _lnrpc_SubscribeStateResponse>
}
