// Original file: protos/peersrpc/peers.proto

import type { UpdateActionPartial as _peersrpc_UpdateActionPartial, UpdateAction as _peersrpc_UpdateAction } from '../peersrpc/UpdateAction';
import type { FeatureBitPartial as _lnrpc_FeatureBitPartial, FeatureBit as _lnrpc_FeatureBit } from '../lnrpc/FeatureBit';

export interface UpdateFeatureActionPartial {
  'action'?: (_peersrpc_UpdateActionPartial);
  'featureBit'?: (_lnrpc_FeatureBitPartial);
}

export interface UpdateFeatureAction {
  'action': (_peersrpc_UpdateAction);
  'featureBit': (_lnrpc_FeatureBit);
}
