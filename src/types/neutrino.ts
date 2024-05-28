import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NeutrinoKitClient as _neutrinorpc_NeutrinoKitClient, NeutrinoKitDefinition as _neutrinorpc_NeutrinoKitDefinition } from './neutrinorpc/NeutrinoKit';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  neutrinorpc: {
    AddPeerRequest: MessageTypeDefinition
    AddPeerResponse: MessageTypeDefinition
    DisconnectPeerRequest: MessageTypeDefinition
    DisconnectPeerResponse: MessageTypeDefinition
    GetBlockHashRequest: MessageTypeDefinition
    GetBlockHashResponse: MessageTypeDefinition
    GetBlockHeaderRequest: MessageTypeDefinition
    GetBlockHeaderResponse: MessageTypeDefinition
    GetBlockRequest: MessageTypeDefinition
    GetBlockResponse: MessageTypeDefinition
    GetCFilterRequest: MessageTypeDefinition
    GetCFilterResponse: MessageTypeDefinition
    IsBannedRequest: MessageTypeDefinition
    IsBannedResponse: MessageTypeDefinition
    NeutrinoKit: SubtypeConstructor<typeof grpc.Client, _neutrinorpc_NeutrinoKitClient> & { service: _neutrinorpc_NeutrinoKitDefinition }
    StatusRequest: MessageTypeDefinition
    StatusResponse: MessageTypeDefinition
  }
}

