// Original file: protos/walletrpc/walletkit.proto

import type { Long } from '@grpc/proto-loader';

export interface RequiredReserveResponsePartial {
  'requiredReserve'?: (number | string | Long);
}

export interface RequiredReserveResponse {
  'requiredReserve': (string);
}
