// Original file: protos/walletrpc/walletkit.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { WitnessTypePartial as _walletrpc_WitnessTypePartial, WitnessType as _walletrpc_WitnessType } from '../walletrpc/WitnessType';
import type { Long } from '@grpc/proto-loader';

export interface PendingSweepPartial {
  'outpoint'?: (_lnrpc_OutPointPartial | null);
  'witnessType'?: (_walletrpc_WitnessTypePartial);
  'amountSat'?: (number);
  'satPerByte'?: (number);
  'broadcastAttempts'?: (number);
  'nextBroadcastHeight'?: (number);
  'force'?: (boolean);
  'requestedConfTarget'?: (number);
  'requestedSatPerByte'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'requestedSatPerVbyte'?: (number | string | Long);
  'immediate'?: (boolean);
  'budget'?: (number | string | Long);
  'deadlineHeight'?: (number);
}

export interface PendingSweep {
  'outpoint': (_lnrpc_OutPoint | null);
  'witnessType': (_walletrpc_WitnessType);
  'amountSat': (number);
  'satPerByte': (number);
  'broadcastAttempts': (number);
  'nextBroadcastHeight': (number);
  'force': (boolean);
  'requestedConfTarget': (number);
  'requestedSatPerByte': (number);
  'satPerVbyte': (string);
  'requestedSatPerVbyte': (string);
  'immediate': (boolean);
  'budget': (string);
  'deadlineHeight': (number);
}
