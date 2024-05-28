// Original file: protos/chainrpc/chainnotifier.proto

import type { OutpointPartial as _chainrpc_OutpointPartial, Outpoint as _chainrpc_Outpoint } from '../chainrpc/Outpoint';

export interface SpendDetailsPartial {
  'spendingOutpoint'?: (_chainrpc_OutpointPartial | null);
  'rawSpendingTx'?: (Buffer | Uint8Array | string);
  'spendingTxHash'?: (Buffer | Uint8Array | string);
  'spendingInputIndex'?: (number);
  'spendingHeight'?: (number);
}

export interface SpendDetails {
  'spendingOutpoint': (_chainrpc_Outpoint | null);
  'rawSpendingTx': (Buffer);
  'spendingTxHash': (Buffer);
  'spendingInputIndex': (number);
  'spendingHeight': (number);
}
