// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ChanInfoRequestPartial {
  'chanId'?: (number | string | Long);
}

export interface ChanInfoRequest {
  'chanId': (string);
}
