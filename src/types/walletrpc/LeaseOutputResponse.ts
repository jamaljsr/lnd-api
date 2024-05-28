// Original file: protos/walletrpc/walletkit.proto

import type { Long } from '@grpc/proto-loader';

export interface LeaseOutputResponsePartial {
  'expiration'?: (number | string | Long);
}

export interface LeaseOutputResponse {
  'expiration': (string);
}
