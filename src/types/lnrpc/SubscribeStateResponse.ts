// Original file: protos/stateservice.proto

import type { WalletStatePartial as _lnrpc_WalletStatePartial, WalletState as _lnrpc_WalletState } from '../lnrpc/WalletState';

export interface SubscribeStateResponsePartial {
  'state'?: (_lnrpc_WalletStatePartial);
}

export interface SubscribeStateResponse {
  'state': (_lnrpc_WalletState);
}
