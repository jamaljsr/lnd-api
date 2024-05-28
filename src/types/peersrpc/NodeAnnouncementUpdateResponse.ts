// Original file: protos/peersrpc/peers.proto

import type { OpPartial as _lnrpc_OpPartial, Op as _lnrpc_Op } from '../lnrpc/Op';

export interface NodeAnnouncementUpdateResponsePartial {
  'ops'?: (_lnrpc_OpPartial)[];
}

export interface NodeAnnouncementUpdateResponse {
  'ops': (_lnrpc_Op)[];
}
