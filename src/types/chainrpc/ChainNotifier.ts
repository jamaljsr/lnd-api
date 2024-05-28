// Original file: protos/chainrpc/chainnotifier.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BlockEpochPartial as _chainrpc_BlockEpochPartial, BlockEpoch as _chainrpc_BlockEpoch } from '../chainrpc/BlockEpoch';
import type { ConfEventPartial as _chainrpc_ConfEventPartial, ConfEvent as _chainrpc_ConfEvent } from '../chainrpc/ConfEvent';
import type { ConfRequestPartial as _chainrpc_ConfRequestPartial, ConfRequest as _chainrpc_ConfRequest } from '../chainrpc/ConfRequest';
import type { SpendEventPartial as _chainrpc_SpendEventPartial, SpendEvent as _chainrpc_SpendEvent } from '../chainrpc/SpendEvent';
import type { SpendRequestPartial as _chainrpc_SpendRequestPartial, SpendRequest as _chainrpc_SpendRequest } from '../chainrpc/SpendRequest';

export interface ChainNotifierClient extends grpc.Client {
  RegisterBlockEpochNtfn(argument: _chainrpc_BlockEpochPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_BlockEpoch>;
  RegisterBlockEpochNtfn(argument: _chainrpc_BlockEpochPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_BlockEpoch>;
  registerBlockEpochNtfn(argument: _chainrpc_BlockEpochPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_BlockEpoch>;
  registerBlockEpochNtfn(argument: _chainrpc_BlockEpochPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_BlockEpoch>;
  
  RegisterConfirmationsNtfn(argument: _chainrpc_ConfRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_ConfEvent>;
  RegisterConfirmationsNtfn(argument: _chainrpc_ConfRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_ConfEvent>;
  registerConfirmationsNtfn(argument: _chainrpc_ConfRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_ConfEvent>;
  registerConfirmationsNtfn(argument: _chainrpc_ConfRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_ConfEvent>;
  
  RegisterSpendNtfn(argument: _chainrpc_SpendRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_SpendEvent>;
  RegisterSpendNtfn(argument: _chainrpc_SpendRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_SpendEvent>;
  registerSpendNtfn(argument: _chainrpc_SpendRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_SpendEvent>;
  registerSpendNtfn(argument: _chainrpc_SpendRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_chainrpc_SpendEvent>;
  
}

export interface ChainNotifierHandlers extends grpc.UntypedServiceImplementation {
  RegisterBlockEpochNtfn: grpc.handleServerStreamingCall<_chainrpc_BlockEpoch, _chainrpc_BlockEpochPartial>;
  
  RegisterConfirmationsNtfn: grpc.handleServerStreamingCall<_chainrpc_ConfRequest, _chainrpc_ConfEventPartial>;
  
  RegisterSpendNtfn: grpc.handleServerStreamingCall<_chainrpc_SpendRequest, _chainrpc_SpendEventPartial>;
  
}

export interface ChainNotifierDefinition extends grpc.ServiceDefinition {
  RegisterBlockEpochNtfn: MethodDefinition<_chainrpc_BlockEpochPartial, _chainrpc_BlockEpochPartial, _chainrpc_BlockEpoch, _chainrpc_BlockEpoch>
  RegisterConfirmationsNtfn: MethodDefinition<_chainrpc_ConfRequestPartial, _chainrpc_ConfEventPartial, _chainrpc_ConfRequest, _chainrpc_ConfEvent>
  RegisterSpendNtfn: MethodDefinition<_chainrpc_SpendRequestPartial, _chainrpc_SpendEventPartial, _chainrpc_SpendRequest, _chainrpc_SpendEvent>
}
