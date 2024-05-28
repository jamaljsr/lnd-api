import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AutopilotClient as _autopilotrpc_AutopilotClient, AutopilotDefinition as _autopilotrpc_AutopilotDefinition } from './autopilotrpc/Autopilot';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  autopilotrpc: {
    Autopilot: SubtypeConstructor<typeof grpc.Client, _autopilotrpc_AutopilotClient> & { service: _autopilotrpc_AutopilotDefinition }
    ModifyStatusRequest: MessageTypeDefinition
    ModifyStatusResponse: MessageTypeDefinition
    QueryScoresRequest: MessageTypeDefinition
    QueryScoresResponse: MessageTypeDefinition
    SetScoresRequest: MessageTypeDefinition
    SetScoresResponse: MessageTypeDefinition
    StatusRequest: MessageTypeDefinition
    StatusResponse: MessageTypeDefinition
  }
}

