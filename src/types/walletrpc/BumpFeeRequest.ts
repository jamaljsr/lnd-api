// Original file: protos/walletrpc/walletkit.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface BumpFeeRequestPartial {
  'outpoint'?: (_lnrpc_OutPointPartial | null);
  'targetConf'?: (number);
  'satPerByte'?: (number);
  'force'?: (boolean);
  'satPerVbyte'?: (number | string | Long);
  'immediate'?: (boolean);
  'budget'?: (number | string | Long);
  'deadlineDelta'?: (number);
}

export interface BumpFeeRequest {
  'outpoint': (_lnrpc_OutPoint | null);
  'targetConf': (number);
  'satPerByte': (number);
  'force': (boolean);
  'satPerVbyte': (string);
  'immediate': (boolean);
  'budget': (string);
  'deadlineDelta': (number);
}
