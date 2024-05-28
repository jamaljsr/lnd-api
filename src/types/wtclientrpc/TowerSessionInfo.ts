// Original file: protos/wtclientrpc/wtclient.proto

import type { TowerSessionPartial as _wtclientrpc_TowerSessionPartial, TowerSession as _wtclientrpc_TowerSession } from '../wtclientrpc/TowerSession';
import type { PolicyTypePartial as _wtclientrpc_PolicyTypePartial, PolicyType as _wtclientrpc_PolicyType } from '../wtclientrpc/PolicyType';

export interface TowerSessionInfoPartial {
  'activeSessionCandidate'?: (boolean);
  'numSessions'?: (number);
  'sessions'?: (_wtclientrpc_TowerSessionPartial)[];
  'policyType'?: (_wtclientrpc_PolicyTypePartial);
}

export interface TowerSessionInfo {
  'activeSessionCandidate': (boolean);
  'numSessions': (number);
  'sessions': (_wtclientrpc_TowerSession)[];
  'policyType': (_wtclientrpc_PolicyType);
}
