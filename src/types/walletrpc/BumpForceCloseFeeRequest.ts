// Original file: protos/walletrpc/walletkit.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { Long } from '@grpc/proto-loader';

export interface BumpForceCloseFeeRequestPartial {
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
  'deadlineDelta'?: (number);
  'startingFeerate'?: (number | string | Long);
  'immediate'?: (boolean);
  'budget'?: (number | string | Long);
  'targetConf'?: (number);
}

export interface BumpForceCloseFeeRequest {
  'chanPoint': (_lnrpc_ChannelPoint | null);
  'deadlineDelta': (number);
  'startingFeerate': (string);
  'immediate': (boolean);
  'budget': (string);
  'targetConf': (number);
}
