// Original file: protos/verrpc/verrpc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { VersionPartial as _verrpc_VersionPartial, Version as _verrpc_Version } from '../verrpc/Version';
import type { VersionRequestPartial as _verrpc_VersionRequestPartial, VersionRequest as _verrpc_VersionRequest } from '../verrpc/VersionRequest';

export interface VersionerClient extends grpc.Client {
  GetVersion(argument: _verrpc_VersionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  GetVersion(argument: _verrpc_VersionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  GetVersion(argument: _verrpc_VersionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  GetVersion(argument: _verrpc_VersionRequestPartial, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  getVersion(argument: _verrpc_VersionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  getVersion(argument: _verrpc_VersionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  getVersion(argument: _verrpc_VersionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  getVersion(argument: _verrpc_VersionRequestPartial, callback: grpc.requestCallback<_verrpc_Version>): grpc.ClientUnaryCall;
  
}

export interface VersionerHandlers extends grpc.UntypedServiceImplementation {
  GetVersion: grpc.handleUnaryCall<_verrpc_VersionRequest, _verrpc_VersionPartial>;
  
}

export interface VersionerDefinition extends grpc.ServiceDefinition {
  GetVersion: MethodDefinition<_verrpc_VersionRequestPartial, _verrpc_VersionPartial, _verrpc_VersionRequest, _verrpc_Version>
}
