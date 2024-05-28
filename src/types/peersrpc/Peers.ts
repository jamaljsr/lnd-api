// Original file: protos/peersrpc/peers.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NodeAnnouncementUpdateRequestPartial as _peersrpc_NodeAnnouncementUpdateRequestPartial, NodeAnnouncementUpdateRequest as _peersrpc_NodeAnnouncementUpdateRequest } from '../peersrpc/NodeAnnouncementUpdateRequest';
import type { NodeAnnouncementUpdateResponsePartial as _peersrpc_NodeAnnouncementUpdateResponsePartial, NodeAnnouncementUpdateResponse as _peersrpc_NodeAnnouncementUpdateResponse } from '../peersrpc/NodeAnnouncementUpdateResponse';

export interface PeersClient extends grpc.Client {
  UpdateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  UpdateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  UpdateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  UpdateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  updateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  updateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  updateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  updateNodeAnnouncement(argument: _peersrpc_NodeAnnouncementUpdateRequestPartial, callback: grpc.requestCallback<_peersrpc_NodeAnnouncementUpdateResponse>): grpc.ClientUnaryCall;
  
}

export interface PeersHandlers extends grpc.UntypedServiceImplementation {
  UpdateNodeAnnouncement: grpc.handleUnaryCall<_peersrpc_NodeAnnouncementUpdateRequest, _peersrpc_NodeAnnouncementUpdateResponsePartial>;
  
}

export interface PeersDefinition extends grpc.ServiceDefinition {
  UpdateNodeAnnouncement: MethodDefinition<_peersrpc_NodeAnnouncementUpdateRequestPartial, _peersrpc_NodeAnnouncementUpdateResponsePartial, _peersrpc_NodeAnnouncementUpdateRequest, _peersrpc_NodeAnnouncementUpdateResponse>
}
