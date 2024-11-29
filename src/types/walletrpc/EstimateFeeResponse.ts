// Original file: protos/walletrpc/walletkit.proto

import type { Long } from '@grpc/proto-loader';

export interface EstimateFeeResponsePartial {
  'satPerKw'?: (number | string | Long);
  'minRelayFeeSatPerKw'?: (number | string | Long);
}

export interface EstimateFeeResponse {
  'satPerKw': (string);
  'minRelayFeeSatPerKw': (string);
}
