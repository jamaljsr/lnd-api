import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { WatchtowerClientClient as _wtclientrpc_WatchtowerClientClient, WatchtowerClientDefinition as _wtclientrpc_WatchtowerClientDefinition } from './wtclientrpc/WatchtowerClient';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  wtclientrpc: {
    AddTowerRequest: MessageTypeDefinition
    AddTowerResponse: MessageTypeDefinition
    DeactivateTowerRequest: MessageTypeDefinition
    DeactivateTowerResponse: MessageTypeDefinition
    GetTowerInfoRequest: MessageTypeDefinition
    ListTowersRequest: MessageTypeDefinition
    ListTowersResponse: MessageTypeDefinition
    PolicyRequest: MessageTypeDefinition
    PolicyResponse: MessageTypeDefinition
    PolicyType: EnumTypeDefinition
    RemoveTowerRequest: MessageTypeDefinition
    RemoveTowerResponse: MessageTypeDefinition
    StatsRequest: MessageTypeDefinition
    StatsResponse: MessageTypeDefinition
    TerminateSessionRequest: MessageTypeDefinition
    TerminateSessionResponse: MessageTypeDefinition
    Tower: MessageTypeDefinition
    TowerSession: MessageTypeDefinition
    TowerSessionInfo: MessageTypeDefinition
    WatchtowerClient: SubtypeConstructor<typeof grpc.Client, _wtclientrpc_WatchtowerClientClient> & { service: _wtclientrpc_WatchtowerClientDefinition }
  }
}

