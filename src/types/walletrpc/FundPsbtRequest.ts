// Original file: protos/walletrpc/walletkit.proto

import type { TxTemplatePartial as _walletrpc_TxTemplatePartial, TxTemplate as _walletrpc_TxTemplate } from '../walletrpc/TxTemplate';
import type { ChangeAddressTypePartial as _walletrpc_ChangeAddressTypePartial, ChangeAddressType as _walletrpc_ChangeAddressType } from '../walletrpc/ChangeAddressType';
import type { PsbtCoinSelectPartial as _walletrpc_PsbtCoinSelectPartial, PsbtCoinSelect as _walletrpc_PsbtCoinSelect } from '../walletrpc/PsbtCoinSelect';
import type { CoinSelectionStrategyPartial as _lnrpc_CoinSelectionStrategyPartial, CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy } from '../lnrpc/CoinSelectionStrategy';
import type { Long } from '@grpc/proto-loader';

export interface FundPsbtRequestPartial {
  'psbt'?: (Buffer | Uint8Array | string);
  'raw'?: (_walletrpc_TxTemplatePartial | null);
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'account'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'changeType'?: (_walletrpc_ChangeAddressTypePartial);
  'coinSelect'?: (_walletrpc_PsbtCoinSelectPartial | null);
  'coinSelectionStrategy'?: (_lnrpc_CoinSelectionStrategyPartial);
  'satPerKw'?: (number | string | Long);
  'maxFeeRatio'?: (number | string);
  'customLockId'?: (Buffer | Uint8Array | string);
  'lockExpirationSeconds'?: (number | string | Long);
  'template'?: "psbt"|"raw"|"coinSelect";
  'fees'?: "targetConf"|"satPerVbyte"|"satPerKw";
}

export interface FundPsbtRequest {
  'psbt'?: (Buffer);
  'raw'?: (_walletrpc_TxTemplate | null);
  'targetConf'?: (number);
  'satPerVbyte'?: (string);
  'account': (string);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'changeType': (_walletrpc_ChangeAddressType);
  'coinSelect'?: (_walletrpc_PsbtCoinSelect | null);
  'coinSelectionStrategy': (_lnrpc_CoinSelectionStrategy);
  'satPerKw'?: (string);
  'maxFeeRatio': (number);
  'customLockId': (Buffer);
  'lockExpirationSeconds': (string);
  'template': "psbt"|"raw"|"coinSelect";
  'fees': "targetConf"|"satPerVbyte"|"satPerKw";
}
