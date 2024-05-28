// Original file: protos/peersrpc/peers.proto

import type { UpdateActionPartial as _peersrpc_UpdateActionPartial, UpdateAction as _peersrpc_UpdateAction } from '../peersrpc/UpdateAction';

export interface UpdateAddressActionPartial {
  'action'?: (_peersrpc_UpdateActionPartial);
  'address'?: (string);
}

export interface UpdateAddressAction {
  'action': (_peersrpc_UpdateAction);
  'address': (string);
}
