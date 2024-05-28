import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { VersionerClient as _verrpc_VersionerClient, VersionerDefinition as _verrpc_VersionerDefinition } from './verrpc/Versioner';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  verrpc: {
    Version: MessageTypeDefinition
    VersionRequest: MessageTypeDefinition
    Versioner: SubtypeConstructor<typeof grpc.Client, _verrpc_VersionerClient> & { service: _verrpc_VersionerDefinition }
  }
}

