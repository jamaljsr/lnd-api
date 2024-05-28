// Original file: protos/walletrpc/walletkit.proto

import type { TxOutPartial as _signrpc_TxOutPartial, TxOut as _signrpc_TxOut } from '../signrpc/TxOut';
import type { CoinSelectionStrategyPartial as _lnrpc_CoinSelectionStrategyPartial, CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy } from '../lnrpc/CoinSelectionStrategy';
import type { Long } from '@grpc/proto-loader';

export interface SendOutputsRequestPartial {
  'satPerKw'?: (number | string | Long);
  'outputs'?: (_signrpc_TxOutPartial)[];
  'label'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'coinSelectionStrategy'?: (_lnrpc_CoinSelectionStrategyPartial);
}

export interface SendOutputsRequest {
  'satPerKw': (string);
  'outputs': (_signrpc_TxOut)[];
  'label': (string);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'coinSelectionStrategy': (_lnrpc_CoinSelectionStrategy);
}
