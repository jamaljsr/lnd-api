// Original file: protos/neutrinorpc/neutrino.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddPeerRequestPartial as _neutrinorpc_AddPeerRequestPartial, AddPeerRequest as _neutrinorpc_AddPeerRequest } from '../neutrinorpc/AddPeerRequest';
import type { AddPeerResponsePartial as _neutrinorpc_AddPeerResponsePartial, AddPeerResponse as _neutrinorpc_AddPeerResponse } from '../neutrinorpc/AddPeerResponse';
import type { DisconnectPeerRequestPartial as _neutrinorpc_DisconnectPeerRequestPartial, DisconnectPeerRequest as _neutrinorpc_DisconnectPeerRequest } from '../neutrinorpc/DisconnectPeerRequest';
import type { DisconnectPeerResponsePartial as _neutrinorpc_DisconnectPeerResponsePartial, DisconnectPeerResponse as _neutrinorpc_DisconnectPeerResponse } from '../neutrinorpc/DisconnectPeerResponse';
import type { GetBlockHashRequestPartial as _neutrinorpc_GetBlockHashRequestPartial, GetBlockHashRequest as _neutrinorpc_GetBlockHashRequest } from '../neutrinorpc/GetBlockHashRequest';
import type { GetBlockHashResponsePartial as _neutrinorpc_GetBlockHashResponsePartial, GetBlockHashResponse as _neutrinorpc_GetBlockHashResponse } from '../neutrinorpc/GetBlockHashResponse';
import type { GetBlockHeaderRequestPartial as _neutrinorpc_GetBlockHeaderRequestPartial, GetBlockHeaderRequest as _neutrinorpc_GetBlockHeaderRequest } from '../neutrinorpc/GetBlockHeaderRequest';
import type { GetBlockHeaderResponsePartial as _neutrinorpc_GetBlockHeaderResponsePartial, GetBlockHeaderResponse as _neutrinorpc_GetBlockHeaderResponse } from '../neutrinorpc/GetBlockHeaderResponse';
import type { GetBlockRequestPartial as _neutrinorpc_GetBlockRequestPartial, GetBlockRequest as _neutrinorpc_GetBlockRequest } from '../neutrinorpc/GetBlockRequest';
import type { GetBlockResponsePartial as _neutrinorpc_GetBlockResponsePartial, GetBlockResponse as _neutrinorpc_GetBlockResponse } from '../neutrinorpc/GetBlockResponse';
import type { GetCFilterRequestPartial as _neutrinorpc_GetCFilterRequestPartial, GetCFilterRequest as _neutrinorpc_GetCFilterRequest } from '../neutrinorpc/GetCFilterRequest';
import type { GetCFilterResponsePartial as _neutrinorpc_GetCFilterResponsePartial, GetCFilterResponse as _neutrinorpc_GetCFilterResponse } from '../neutrinorpc/GetCFilterResponse';
import type { IsBannedRequestPartial as _neutrinorpc_IsBannedRequestPartial, IsBannedRequest as _neutrinorpc_IsBannedRequest } from '../neutrinorpc/IsBannedRequest';
import type { IsBannedResponsePartial as _neutrinorpc_IsBannedResponsePartial, IsBannedResponse as _neutrinorpc_IsBannedResponse } from '../neutrinorpc/IsBannedResponse';
import type { StatusRequestPartial as _neutrinorpc_StatusRequestPartial, StatusRequest as _neutrinorpc_StatusRequest } from '../neutrinorpc/StatusRequest';
import type { StatusResponsePartial as _neutrinorpc_StatusResponsePartial, StatusResponse as _neutrinorpc_StatusResponse } from '../neutrinorpc/StatusResponse';

export interface NeutrinoKitClient extends grpc.Client {
  AddPeer(argument: _neutrinorpc_AddPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  AddPeer(argument: _neutrinorpc_AddPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  AddPeer(argument: _neutrinorpc_AddPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  AddPeer(argument: _neutrinorpc_AddPeerRequestPartial, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  addPeer(argument: _neutrinorpc_AddPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  addPeer(argument: _neutrinorpc_AddPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  addPeer(argument: _neutrinorpc_AddPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  addPeer(argument: _neutrinorpc_AddPeerRequestPartial, callback: grpc.requestCallback<_neutrinorpc_AddPeerResponse>): grpc.ClientUnaryCall;
  
  DisconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  disconnectPeer(argument: _neutrinorpc_DisconnectPeerRequestPartial, callback: grpc.requestCallback<_neutrinorpc_DisconnectPeerResponse>): grpc.ClientUnaryCall;
  
  GetBlock(argument: _neutrinorpc_GetBlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  GetBlock(argument: _neutrinorpc_GetBlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  GetBlock(argument: _neutrinorpc_GetBlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  GetBlock(argument: _neutrinorpc_GetBlockRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _neutrinorpc_GetBlockRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _neutrinorpc_GetBlockRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _neutrinorpc_GetBlockRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  getBlock(argument: _neutrinorpc_GetBlockRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetBlockResponse>): grpc.ClientUnaryCall;
  
  GetBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  GetBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  GetBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  GetBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  getBlockHash(argument: _neutrinorpc_GetBlockHashRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetBlockHashResponse>): grpc.ClientUnaryCall;
  
  GetBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  GetBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  GetBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  GetBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  getBlockHeader(argument: _neutrinorpc_GetBlockHeaderRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetBlockHeaderResponse>): grpc.ClientUnaryCall;
  
  GetCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  GetCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  GetCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  GetCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  getCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  getCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  getCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  getCFilter(argument: _neutrinorpc_GetCFilterRequestPartial, callback: grpc.requestCallback<_neutrinorpc_GetCFilterResponse>): grpc.ClientUnaryCall;
  
  IsBanned(argument: _neutrinorpc_IsBannedRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  IsBanned(argument: _neutrinorpc_IsBannedRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  IsBanned(argument: _neutrinorpc_IsBannedRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  IsBanned(argument: _neutrinorpc_IsBannedRequestPartial, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  isBanned(argument: _neutrinorpc_IsBannedRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  isBanned(argument: _neutrinorpc_IsBannedRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  isBanned(argument: _neutrinorpc_IsBannedRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  isBanned(argument: _neutrinorpc_IsBannedRequestPartial, callback: grpc.requestCallback<_neutrinorpc_IsBannedResponse>): grpc.ClientUnaryCall;
  
  Status(argument: _neutrinorpc_StatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  Status(argument: _neutrinorpc_StatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  Status(argument: _neutrinorpc_StatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  Status(argument: _neutrinorpc_StatusRequestPartial, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _neutrinorpc_StatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _neutrinorpc_StatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _neutrinorpc_StatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _neutrinorpc_StatusRequestPartial, callback: grpc.requestCallback<_neutrinorpc_StatusResponse>): grpc.ClientUnaryCall;
  
}

export interface NeutrinoKitHandlers extends grpc.UntypedServiceImplementation {
  AddPeer: grpc.handleUnaryCall<_neutrinorpc_AddPeerRequest, _neutrinorpc_AddPeerResponsePartial>;
  
  DisconnectPeer: grpc.handleUnaryCall<_neutrinorpc_DisconnectPeerRequest, _neutrinorpc_DisconnectPeerResponsePartial>;
  
  GetBlock: grpc.handleUnaryCall<_neutrinorpc_GetBlockRequest, _neutrinorpc_GetBlockResponsePartial>;
  
  GetBlockHash: grpc.handleUnaryCall<_neutrinorpc_GetBlockHashRequest, _neutrinorpc_GetBlockHashResponsePartial>;
  
  GetBlockHeader: grpc.handleUnaryCall<_neutrinorpc_GetBlockHeaderRequest, _neutrinorpc_GetBlockHeaderResponsePartial>;
  
  GetCFilter: grpc.handleUnaryCall<_neutrinorpc_GetCFilterRequest, _neutrinorpc_GetCFilterResponsePartial>;
  
  IsBanned: grpc.handleUnaryCall<_neutrinorpc_IsBannedRequest, _neutrinorpc_IsBannedResponsePartial>;
  
  Status: grpc.handleUnaryCall<_neutrinorpc_StatusRequest, _neutrinorpc_StatusResponsePartial>;
  
}

export interface NeutrinoKitDefinition extends grpc.ServiceDefinition {
  AddPeer: MethodDefinition<_neutrinorpc_AddPeerRequestPartial, _neutrinorpc_AddPeerResponsePartial, _neutrinorpc_AddPeerRequest, _neutrinorpc_AddPeerResponse>
  DisconnectPeer: MethodDefinition<_neutrinorpc_DisconnectPeerRequestPartial, _neutrinorpc_DisconnectPeerResponsePartial, _neutrinorpc_DisconnectPeerRequest, _neutrinorpc_DisconnectPeerResponse>
  GetBlock: MethodDefinition<_neutrinorpc_GetBlockRequestPartial, _neutrinorpc_GetBlockResponsePartial, _neutrinorpc_GetBlockRequest, _neutrinorpc_GetBlockResponse>
  GetBlockHash: MethodDefinition<_neutrinorpc_GetBlockHashRequestPartial, _neutrinorpc_GetBlockHashResponsePartial, _neutrinorpc_GetBlockHashRequest, _neutrinorpc_GetBlockHashResponse>
  GetBlockHeader: MethodDefinition<_neutrinorpc_GetBlockHeaderRequestPartial, _neutrinorpc_GetBlockHeaderResponsePartial, _neutrinorpc_GetBlockHeaderRequest, _neutrinorpc_GetBlockHeaderResponse>
  GetCFilter: MethodDefinition<_neutrinorpc_GetCFilterRequestPartial, _neutrinorpc_GetCFilterResponsePartial, _neutrinorpc_GetCFilterRequest, _neutrinorpc_GetCFilterResponse>
  IsBanned: MethodDefinition<_neutrinorpc_IsBannedRequestPartial, _neutrinorpc_IsBannedResponsePartial, _neutrinorpc_IsBannedRequest, _neutrinorpc_IsBannedResponse>
  Status: MethodDefinition<_neutrinorpc_StatusRequestPartial, _neutrinorpc_StatusResponsePartial, _neutrinorpc_StatusRequest, _neutrinorpc_StatusResponse>
}
