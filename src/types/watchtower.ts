import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { WatchtowerClient as _watchtowerrpc_WatchtowerClient, WatchtowerDefinition as _watchtowerrpc_WatchtowerDefinition } from './watchtowerrpc/Watchtower';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  watchtowerrpc: {
    GetInfoRequest: MessageTypeDefinition
    GetInfoResponse: MessageTypeDefinition
    Watchtower: SubtypeConstructor<typeof grpc.Client, _watchtowerrpc_WatchtowerClient> & { service: _watchtowerrpc_WatchtowerDefinition }
  }
}

