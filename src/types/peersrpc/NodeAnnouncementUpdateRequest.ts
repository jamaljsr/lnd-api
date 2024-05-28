// Original file: protos/peersrpc/peers.proto

import type { UpdateFeatureActionPartial as _peersrpc_UpdateFeatureActionPartial, UpdateFeatureAction as _peersrpc_UpdateFeatureAction } from '../peersrpc/UpdateFeatureAction';
import type { UpdateAddressActionPartial as _peersrpc_UpdateAddressActionPartial, UpdateAddressAction as _peersrpc_UpdateAddressAction } from '../peersrpc/UpdateAddressAction';

export interface NodeAnnouncementUpdateRequestPartial {
  'featureUpdates'?: (_peersrpc_UpdateFeatureActionPartial)[];
  'color'?: (string);
  'alias'?: (string);
  'addressUpdates'?: (_peersrpc_UpdateAddressActionPartial)[];
}

export interface NodeAnnouncementUpdateRequest {
  'featureUpdates': (_peersrpc_UpdateFeatureAction)[];
  'color': (string);
  'alias': (string);
  'addressUpdates': (_peersrpc_UpdateAddressAction)[];
}
