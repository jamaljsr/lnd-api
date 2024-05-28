// Original file: protos/chainrpc/chainkit.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetBestBlockRequestPartial as _chainrpc_GetBestBlockRequestPartial, GetBestBlockRequest as _chainrpc_GetBestBlockRequest } from '../chainrpc/GetBestBlockRequest';
import type { GetBestBlockResponsePartial as _chainrpc_GetBestBlockResponsePartial, GetBestBlockResponse as _chainrpc_GetBestBlockResponse } from '../chainrpc/GetBestBlockResponse';
import type { GetBlockHashRequestPartial as _chainrpc_GetBlockHashRequestPartial, GetBlockHashRequest as _chainrpc_GetBlockHashRequest } from '../chainrpc/GetBlockHashRequest';
import type { GetBlockHashResponsePartial as _chainrpc_GetBlockHashResponsePartial, GetBlockHashResponse as _chainrpc_GetBlockHashResponse } from '../chainrpc/GetBlockHashResponse';
import type { GetBlockHeaderRequestPartial as _chainrpc_GetBlockHeaderRequestPartial, GetBlockHeaderRequest as _chainrpc_GetBlockHeaderRequest } from '../chainrpc/GetBlockHeaderRequest';
import type { GetBlockHeaderResponsePartial as _chainrpc_GetBlockHeaderResponsePartial, GetBlockHeaderResponse as _chainrpc_GetBlockHeaderResponse } from '../chainrpc/GetBlockHeaderResponse';
import type { GetBlockRequestPartial as _chainrpc_GetBlockRequestPartial, GetBlockRequest as _chainrpc_GetBlockRequest } from '../chainrpc/GetBlockRequest';
import type { GetBlockResponsePartial as _chainrpc_GetBlockResponsePartial, GetBlockResponse as _chainrpc_GetBlockResponse } from '../chainrpc/GetBlockResponse';

export interface ChainKitClient extends grpc.Client {
  GetBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  GetBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  GetBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  GetBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  getBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  getBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  getBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  getBestBlock(argument: _chainrpc_GetBestBlockRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBestBlockResponse>): grpc.ClientUnaryCall;
  
  GetBlock(argument: _chainrpc_GetBlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  GetBlock(argument: _chainrpc_GetBlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  GetBlock(argument: _chainrpc_GetBlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  GetBlock(argument: _chainrpc_GetBlockRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _chainrpc_GetBlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _chainrpc_GetBlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _chainrpc_GetBlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _chainrpc_GetBlockRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBlockResponse>): grpc.ClientUnaryCall;
  
  GetBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  GetBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  GetBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  GetBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _chainrpc_GetBlockHashRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  
  GetBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  GetBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  GetBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  GetBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _chainrpc_GetBlockHeaderRequestPartial, callback: grpc.requestCallback<_chainrpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  
}

export interface ChainKitHandlers extends grpc.UntypedServiceImplementation {
  GetBestBlock: grpc.handleUnaryCall<_chainrpc_GetBestBlockRequest, _chainrpc_GetBestBlockResponsePartial>;
  
  GetBlock: grpc.handleUnaryCall<_chainrpc_GetBlockRequest, _chainrpc_GetBlockResponsePartial>;
  
  GetBlockHash: grpc.handleUnaryCall<_chainrpc_GetBlockHashRequest, _chainrpc_GetBlockHashResponsePartial>;
  
  GetBlockHeader: grpc.handleUnaryCall<_chainrpc_GetBlockHeaderRequest, _chainrpc_GetBlockHeaderResponsePartial>;
  
}

export interface ChainKitDefinition extends grpc.ServiceDefinition {
  GetBestBlock: MethodDefinition<_chainrpc_GetBestBlockRequestPartial, _chainrpc_GetBestBlockResponsePartial, _chainrpc_GetBestBlockRequest, _chainrpc_GetBestBlockResponse>
  GetBlock: MethodDefinition<_chainrpc_GetBlockRequestPartial, _chainrpc_GetBlockResponsePartial, _chainrpc_GetBlockRequest, _chainrpc_GetBlockResponse>
  GetBlockHash: MethodDefinition<_chainrpc_GetBlockHashRequestPartial, _chainrpc_GetBlockHashResponsePartial, _chainrpc_GetBlockHashRequest, _chainrpc_GetBlockHashResponse>
  GetBlockHeader: MethodDefinition<_chainrpc_GetBlockHeaderRequestPartial, _chainrpc_GetBlockHeaderResponsePartial, _chainrpc_GetBlockHeaderRequest, _chainrpc_GetBlockHeaderResponse>
}
