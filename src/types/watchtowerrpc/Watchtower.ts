// Original file: protos/watchtowerrpc/watchtower.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetInfoRequestPartial as _watchtowerrpc_GetInfoRequestPartial, GetInfoRequest as _watchtowerrpc_GetInfoRequest } from '../watchtowerrpc/GetInfoRequest';
import type { GetInfoResponsePartial as _watchtowerrpc_GetInfoResponsePartial, GetInfoResponse as _watchtowerrpc_GetInfoResponse } from '../watchtowerrpc/GetInfoResponse';

export interface WatchtowerClient extends grpc.Client {
  GetInfo(argument: _watchtowerrpc_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _watchtowerrpc_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _watchtowerrpc_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  GetInfo(argument: _watchtowerrpc_GetInfoRequestPartial, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _watchtowerrpc_GetInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _watchtowerrpc_GetInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _watchtowerrpc_GetInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: _watchtowerrpc_GetInfoRequestPartial, callback: grpc.requestCallback<_watchtowerrpc_GetInfoResponse>): grpc.ClientUnaryCall;
  
}

export interface WatchtowerHandlers extends grpc.UntypedServiceImplementation {
  GetInfo: grpc.handleUnaryCall<_watchtowerrpc_GetInfoRequest, _watchtowerrpc_GetInfoResponsePartial>;
  
}

export interface WatchtowerDefinition extends grpc.ServiceDefinition {
  GetInfo: MethodDefinition<_watchtowerrpc_GetInfoRequestPartial, _watchtowerrpc_GetInfoResponsePartial, _watchtowerrpc_GetInfoRequest, _watchtowerrpc_GetInfoResponse>
}
