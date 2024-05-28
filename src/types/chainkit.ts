import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChainKitClient as _chainrpc_ChainKitClient, ChainKitDefinition as _chainrpc_ChainKitDefinition } from './chainrpc/ChainKit';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chainrpc: {
    ChainKit: SubtypeConstructor<typeof grpc.Client, _chainrpc_ChainKitClient> & { service: _chainrpc_ChainKitDefinition }
    GetBestBlockRequest: MessageTypeDefinition
    GetBestBlockResponse: MessageTypeDefinition
    GetBlockHashRequest: MessageTypeDefinition
    GetBlockHashResponse: MessageTypeDefinition
    GetBlockHeaderRequest: MessageTypeDefinition
    GetBlockHeaderResponse: MessageTypeDefinition
    GetBlockRequest: MessageTypeDefinition
    GetBlockResponse: MessageTypeDefinition
  }
}

