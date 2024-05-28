import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChainNotifierClient as _chainrpc_ChainNotifierClient, ChainNotifierDefinition as _chainrpc_ChainNotifierDefinition } from './chainrpc/ChainNotifier';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chainrpc: {
    BlockEpoch: MessageTypeDefinition
    ChainNotifier: SubtypeConstructor<typeof grpc.Client, _chainrpc_ChainNotifierClient> & { service: _chainrpc_ChainNotifierDefinition }
    ConfDetails: MessageTypeDefinition
    ConfEvent: MessageTypeDefinition
    ConfRequest: MessageTypeDefinition
    Outpoint: MessageTypeDefinition
    Reorg: MessageTypeDefinition
    SpendDetails: MessageTypeDefinition
    SpendEvent: MessageTypeDefinition
    SpendRequest: MessageTypeDefinition
  }
}

