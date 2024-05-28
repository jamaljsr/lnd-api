// Original file: protos/wtclientrpc/wtclient.proto

import type { TowerSessionPartial as _wtclientrpc_TowerSessionPartial, TowerSession as _wtclientrpc_TowerSession } from '../wtclientrpc/TowerSession';
import type { TowerSessionInfoPartial as _wtclientrpc_TowerSessionInfoPartial, TowerSessionInfo as _wtclientrpc_TowerSessionInfo } from '../wtclientrpc/TowerSessionInfo';

export interface TowerPartial {
  'pubkey'?: (Buffer | Uint8Array | string);
  'addresses'?: (string)[];
  'activeSessionCandidate'?: (boolean);
  'numSessions'?: (number);
  'sessions'?: (_wtclientrpc_TowerSessionPartial)[];
  'sessionInfo'?: (_wtclientrpc_TowerSessionInfoPartial)[];
}

export interface Tower {
  'pubkey': (Buffer);
  'addresses': (string)[];
  'activeSessionCandidate': (boolean);
  'numSessions': (number);
  'sessions': (_wtclientrpc_TowerSession)[];
  'sessionInfo': (_wtclientrpc_TowerSessionInfo)[];
}
