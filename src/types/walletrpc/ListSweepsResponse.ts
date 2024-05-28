// Original file: protos/walletrpc/walletkit.proto

import type { TransactionDetailsPartial as _lnrpc_TransactionDetailsPartial, TransactionDetails as _lnrpc_TransactionDetails } from '../lnrpc/TransactionDetails';

export interface _walletrpc_ListSweepsResponse_TransactionIDsPartial {
  'transactionIds'?: (string)[];
}

export interface _walletrpc_ListSweepsResponse_TransactionIDs {
  'transactionIds': (string)[];
}

export interface ListSweepsResponsePartial {
  'transactionDetails'?: (_lnrpc_TransactionDetailsPartial | null);
  'transactionIds'?: (_walletrpc_ListSweepsResponse_TransactionIDsPartial | null);
  'sweeps'?: "transactionDetails"|"transactionIds";
}

export interface ListSweepsResponse {
  'transactionDetails'?: (_lnrpc_TransactionDetails | null);
  'transactionIds'?: (_walletrpc_ListSweepsResponse_TransactionIDs | null);
  'sweeps': "transactionDetails"|"transactionIds";
}
