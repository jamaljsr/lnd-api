// Original file: protos/chainrpc/chainkit.proto

import type { Long } from '@grpc/proto-loader';

export interface GetBlockHashRequestPartial {
  'blockHeight'?: (number | string | Long);
}

export interface GetBlockHashRequest {
  'blockHeight': (string);
}
