// Original file: protos/wtclientrpc/wtclient.proto

import type { TowerPartial as _wtclientrpc_TowerPartial, Tower as _wtclientrpc_Tower } from '../wtclientrpc/Tower';

export interface ListTowersResponsePartial {
  'towers'?: (_wtclientrpc_TowerPartial)[];
}

export interface ListTowersResponse {
  'towers': (_wtclientrpc_Tower)[];
}
