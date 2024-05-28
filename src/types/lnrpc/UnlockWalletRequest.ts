// Original file: protos/walletunlocker.proto

import type { ChanBackupSnapshotPartial as _lnrpc_ChanBackupSnapshotPartial, ChanBackupSnapshot as _lnrpc_ChanBackupSnapshot } from '../lnrpc/ChanBackupSnapshot';

export interface UnlockWalletRequestPartial {
  'walletPassword'?: (Buffer | Uint8Array | string);
  'recoveryWindow'?: (number);
  'channelBackups'?: (_lnrpc_ChanBackupSnapshotPartial | null);
  'statelessInit'?: (boolean);
}

export interface UnlockWalletRequest {
  'walletPassword': (Buffer);
  'recoveryWindow': (number);
  'channelBackups': (_lnrpc_ChanBackupSnapshot | null);
  'statelessInit': (boolean);
}
