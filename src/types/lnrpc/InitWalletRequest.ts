// Original file: protos/walletunlocker.proto

import type { ChanBackupSnapshotPartial as _lnrpc_ChanBackupSnapshotPartial, ChanBackupSnapshot as _lnrpc_ChanBackupSnapshot } from '../lnrpc/ChanBackupSnapshot';
import type { WatchOnlyPartial as _lnrpc_WatchOnlyPartial, WatchOnly as _lnrpc_WatchOnly } from '../lnrpc/WatchOnly';
import type { Long } from '@grpc/proto-loader';

export interface InitWalletRequestPartial {
  'walletPassword'?: (Buffer | Uint8Array | string);
  'cipherSeedMnemonic'?: (string)[];
  'aezeedPassphrase'?: (Buffer | Uint8Array | string);
  'recoveryWindow'?: (number);
  'channelBackups'?: (_lnrpc_ChanBackupSnapshotPartial | null);
  'statelessInit'?: (boolean);
  'extendedMasterKey'?: (string);
  'extendedMasterKeyBirthdayTimestamp'?: (number | string | Long);
  'watchOnly'?: (_lnrpc_WatchOnlyPartial | null);
  'macaroonRootKey'?: (Buffer | Uint8Array | string);
}

export interface InitWalletRequest {
  'walletPassword': (Buffer);
  'cipherSeedMnemonic': (string)[];
  'aezeedPassphrase': (Buffer);
  'recoveryWindow': (number);
  'channelBackups': (_lnrpc_ChanBackupSnapshot | null);
  'statelessInit': (boolean);
  'extendedMasterKey': (string);
  'extendedMasterKeyBirthdayTimestamp': (string);
  'watchOnly': (_lnrpc_WatchOnly | null);
  'macaroonRootKey': (Buffer);
}
