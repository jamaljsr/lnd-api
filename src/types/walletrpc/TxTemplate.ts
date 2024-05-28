// Original file: protos/walletrpc/walletkit.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface TxTemplatePartial {
  'inputs'?: (_lnrpc_OutPointPartial)[];
  'outputs'?: ({[key: string]: number | string | Long});
}

export interface TxTemplate {
  'inputs': (_lnrpc_OutPoint)[];
  'outputs': ({[key: string]: string});
}
