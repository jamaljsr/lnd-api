// Original file: protos/walletunlocker.proto

import type { WatchOnlyAccountPartial as _lnrpc_WatchOnlyAccountPartial, WatchOnlyAccount as _lnrpc_WatchOnlyAccount } from '../lnrpc/WatchOnlyAccount';
import type { Long } from '@grpc/proto-loader';

export interface WatchOnlyPartial {
  'masterKeyBirthdayTimestamp'?: (number | string | Long);
  'masterKeyFingerprint'?: (Buffer | Uint8Array | string);
  'accounts'?: (_lnrpc_WatchOnlyAccountPartial)[];
}

export interface WatchOnly {
  'masterKeyBirthdayTimestamp': (string);
  'masterKeyFingerprint': (Buffer);
  'accounts': (_lnrpc_WatchOnlyAccount)[];
}
