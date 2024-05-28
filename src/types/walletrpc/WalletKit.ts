// Original file: protos/walletrpc/walletkit.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddrRequestPartial as _walletrpc_AddrRequestPartial, AddrRequest as _walletrpc_AddrRequest } from '../walletrpc/AddrRequest';
import type { AddrResponsePartial as _walletrpc_AddrResponsePartial, AddrResponse as _walletrpc_AddrResponse } from '../walletrpc/AddrResponse';
import type { BumpFeeRequestPartial as _walletrpc_BumpFeeRequestPartial, BumpFeeRequest as _walletrpc_BumpFeeRequest } from '../walletrpc/BumpFeeRequest';
import type { BumpFeeResponsePartial as _walletrpc_BumpFeeResponsePartial, BumpFeeResponse as _walletrpc_BumpFeeResponse } from '../walletrpc/BumpFeeResponse';
import type { EstimateFeeRequestPartial as _walletrpc_EstimateFeeRequestPartial, EstimateFeeRequest as _walletrpc_EstimateFeeRequest } from '../walletrpc/EstimateFeeRequest';
import type { EstimateFeeResponsePartial as _walletrpc_EstimateFeeResponsePartial, EstimateFeeResponse as _walletrpc_EstimateFeeResponse } from '../walletrpc/EstimateFeeResponse';
import type { FinalizePsbtRequestPartial as _walletrpc_FinalizePsbtRequestPartial, FinalizePsbtRequest as _walletrpc_FinalizePsbtRequest } from '../walletrpc/FinalizePsbtRequest';
import type { FinalizePsbtResponsePartial as _walletrpc_FinalizePsbtResponsePartial, FinalizePsbtResponse as _walletrpc_FinalizePsbtResponse } from '../walletrpc/FinalizePsbtResponse';
import type { FundPsbtRequestPartial as _walletrpc_FundPsbtRequestPartial, FundPsbtRequest as _walletrpc_FundPsbtRequest } from '../walletrpc/FundPsbtRequest';
import type { FundPsbtResponsePartial as _walletrpc_FundPsbtResponsePartial, FundPsbtResponse as _walletrpc_FundPsbtResponse } from '../walletrpc/FundPsbtResponse';
import type { GetTransactionRequestPartial as _walletrpc_GetTransactionRequestPartial, GetTransactionRequest as _walletrpc_GetTransactionRequest } from '../walletrpc/GetTransactionRequest';
import type { ImportAccountRequestPartial as _walletrpc_ImportAccountRequestPartial, ImportAccountRequest as _walletrpc_ImportAccountRequest } from '../walletrpc/ImportAccountRequest';
import type { ImportAccountResponsePartial as _walletrpc_ImportAccountResponsePartial, ImportAccountResponse as _walletrpc_ImportAccountResponse } from '../walletrpc/ImportAccountResponse';
import type { ImportPublicKeyRequestPartial as _walletrpc_ImportPublicKeyRequestPartial, ImportPublicKeyRequest as _walletrpc_ImportPublicKeyRequest } from '../walletrpc/ImportPublicKeyRequest';
import type { ImportPublicKeyResponsePartial as _walletrpc_ImportPublicKeyResponsePartial, ImportPublicKeyResponse as _walletrpc_ImportPublicKeyResponse } from '../walletrpc/ImportPublicKeyResponse';
import type { ImportTapscriptRequestPartial as _walletrpc_ImportTapscriptRequestPartial, ImportTapscriptRequest as _walletrpc_ImportTapscriptRequest } from '../walletrpc/ImportTapscriptRequest';
import type { ImportTapscriptResponsePartial as _walletrpc_ImportTapscriptResponsePartial, ImportTapscriptResponse as _walletrpc_ImportTapscriptResponse } from '../walletrpc/ImportTapscriptResponse';
import type { KeyDescriptorPartial as _signrpc_KeyDescriptorPartial, KeyDescriptor as _signrpc_KeyDescriptor } from '../signrpc/KeyDescriptor';
import type { KeyLocatorPartial as _signrpc_KeyLocatorPartial, KeyLocator as _signrpc_KeyLocator } from '../signrpc/KeyLocator';
import type { KeyReqPartial as _walletrpc_KeyReqPartial, KeyReq as _walletrpc_KeyReq } from '../walletrpc/KeyReq';
import type { LabelTransactionRequestPartial as _walletrpc_LabelTransactionRequestPartial, LabelTransactionRequest as _walletrpc_LabelTransactionRequest } from '../walletrpc/LabelTransactionRequest';
import type { LabelTransactionResponsePartial as _walletrpc_LabelTransactionResponsePartial, LabelTransactionResponse as _walletrpc_LabelTransactionResponse } from '../walletrpc/LabelTransactionResponse';
import type { LeaseOutputRequestPartial as _walletrpc_LeaseOutputRequestPartial, LeaseOutputRequest as _walletrpc_LeaseOutputRequest } from '../walletrpc/LeaseOutputRequest';
import type { LeaseOutputResponsePartial as _walletrpc_LeaseOutputResponsePartial, LeaseOutputResponse as _walletrpc_LeaseOutputResponse } from '../walletrpc/LeaseOutputResponse';
import type { ListAccountsRequestPartial as _walletrpc_ListAccountsRequestPartial, ListAccountsRequest as _walletrpc_ListAccountsRequest } from '../walletrpc/ListAccountsRequest';
import type { ListAccountsResponsePartial as _walletrpc_ListAccountsResponsePartial, ListAccountsResponse as _walletrpc_ListAccountsResponse } from '../walletrpc/ListAccountsResponse';
import type { ListAddressesRequestPartial as _walletrpc_ListAddressesRequestPartial, ListAddressesRequest as _walletrpc_ListAddressesRequest } from '../walletrpc/ListAddressesRequest';
import type { ListAddressesResponsePartial as _walletrpc_ListAddressesResponsePartial, ListAddressesResponse as _walletrpc_ListAddressesResponse } from '../walletrpc/ListAddressesResponse';
import type { ListLeasesRequestPartial as _walletrpc_ListLeasesRequestPartial, ListLeasesRequest as _walletrpc_ListLeasesRequest } from '../walletrpc/ListLeasesRequest';
import type { ListLeasesResponsePartial as _walletrpc_ListLeasesResponsePartial, ListLeasesResponse as _walletrpc_ListLeasesResponse } from '../walletrpc/ListLeasesResponse';
import type { ListSweepsRequestPartial as _walletrpc_ListSweepsRequestPartial, ListSweepsRequest as _walletrpc_ListSweepsRequest } from '../walletrpc/ListSweepsRequest';
import type { ListSweepsResponsePartial as _walletrpc_ListSweepsResponsePartial, ListSweepsResponse as _walletrpc_ListSweepsResponse } from '../walletrpc/ListSweepsResponse';
import type { ListUnspentRequestPartial as _walletrpc_ListUnspentRequestPartial, ListUnspentRequest as _walletrpc_ListUnspentRequest } from '../walletrpc/ListUnspentRequest';
import type { ListUnspentResponsePartial as _walletrpc_ListUnspentResponsePartial, ListUnspentResponse as _walletrpc_ListUnspentResponse } from '../walletrpc/ListUnspentResponse';
import type { PendingSweepsRequestPartial as _walletrpc_PendingSweepsRequestPartial, PendingSweepsRequest as _walletrpc_PendingSweepsRequest } from '../walletrpc/PendingSweepsRequest';
import type { PendingSweepsResponsePartial as _walletrpc_PendingSweepsResponsePartial, PendingSweepsResponse as _walletrpc_PendingSweepsResponse } from '../walletrpc/PendingSweepsResponse';
import type { PublishResponsePartial as _walletrpc_PublishResponsePartial, PublishResponse as _walletrpc_PublishResponse } from '../walletrpc/PublishResponse';
import type { ReleaseOutputRequestPartial as _walletrpc_ReleaseOutputRequestPartial, ReleaseOutputRequest as _walletrpc_ReleaseOutputRequest } from '../walletrpc/ReleaseOutputRequest';
import type { ReleaseOutputResponsePartial as _walletrpc_ReleaseOutputResponsePartial, ReleaseOutputResponse as _walletrpc_ReleaseOutputResponse } from '../walletrpc/ReleaseOutputResponse';
import type { RemoveTransactionResponsePartial as _walletrpc_RemoveTransactionResponsePartial, RemoveTransactionResponse as _walletrpc_RemoveTransactionResponse } from '../walletrpc/RemoveTransactionResponse';
import type { RequiredReserveRequestPartial as _walletrpc_RequiredReserveRequestPartial, RequiredReserveRequest as _walletrpc_RequiredReserveRequest } from '../walletrpc/RequiredReserveRequest';
import type { RequiredReserveResponsePartial as _walletrpc_RequiredReserveResponsePartial, RequiredReserveResponse as _walletrpc_RequiredReserveResponse } from '../walletrpc/RequiredReserveResponse';
import type { SendOutputsRequestPartial as _walletrpc_SendOutputsRequestPartial, SendOutputsRequest as _walletrpc_SendOutputsRequest } from '../walletrpc/SendOutputsRequest';
import type { SendOutputsResponsePartial as _walletrpc_SendOutputsResponsePartial, SendOutputsResponse as _walletrpc_SendOutputsResponse } from '../walletrpc/SendOutputsResponse';
import type { SignMessageWithAddrRequestPartial as _walletrpc_SignMessageWithAddrRequestPartial, SignMessageWithAddrRequest as _walletrpc_SignMessageWithAddrRequest } from '../walletrpc/SignMessageWithAddrRequest';
import type { SignMessageWithAddrResponsePartial as _walletrpc_SignMessageWithAddrResponsePartial, SignMessageWithAddrResponse as _walletrpc_SignMessageWithAddrResponse } from '../walletrpc/SignMessageWithAddrResponse';
import type { SignPsbtRequestPartial as _walletrpc_SignPsbtRequestPartial, SignPsbtRequest as _walletrpc_SignPsbtRequest } from '../walletrpc/SignPsbtRequest';
import type { SignPsbtResponsePartial as _walletrpc_SignPsbtResponsePartial, SignPsbtResponse as _walletrpc_SignPsbtResponse } from '../walletrpc/SignPsbtResponse';
import type { TransactionPartial as _lnrpc_TransactionPartial, Transaction as _lnrpc_Transaction } from '../lnrpc/Transaction';
import type { TransactionPartial as _walletrpc_TransactionPartial, Transaction as _walletrpc_Transaction } from '../walletrpc/Transaction';
import type { VerifyMessageWithAddrRequestPartial as _walletrpc_VerifyMessageWithAddrRequestPartial, VerifyMessageWithAddrRequest as _walletrpc_VerifyMessageWithAddrRequest } from '../walletrpc/VerifyMessageWithAddrRequest';
import type { VerifyMessageWithAddrResponsePartial as _walletrpc_VerifyMessageWithAddrResponsePartial, VerifyMessageWithAddrResponse as _walletrpc_VerifyMessageWithAddrResponse } from '../walletrpc/VerifyMessageWithAddrResponse';

export interface WalletKitClient extends grpc.Client {
  BumpFee(argument: _walletrpc_BumpFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  BumpFee(argument: _walletrpc_BumpFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  BumpFee(argument: _walletrpc_BumpFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  BumpFee(argument: _walletrpc_BumpFeeRequestPartial, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  bumpFee(argument: _walletrpc_BumpFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  bumpFee(argument: _walletrpc_BumpFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  bumpFee(argument: _walletrpc_BumpFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  bumpFee(argument: _walletrpc_BumpFeeRequestPartial, callback: grpc.requestCallback<_walletrpc_BumpFeeResponse>): grpc.ClientUnaryCall;
  
  DeriveKey(argument: _signrpc_KeyLocatorPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  DeriveKey(argument: _signrpc_KeyLocatorPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  DeriveKey(argument: _signrpc_KeyLocatorPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  DeriveKey(argument: _signrpc_KeyLocatorPartial, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveKey(argument: _signrpc_KeyLocatorPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveKey(argument: _signrpc_KeyLocatorPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveKey(argument: _signrpc_KeyLocatorPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveKey(argument: _signrpc_KeyLocatorPartial, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  
  DeriveNextKey(argument: _walletrpc_KeyReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  DeriveNextKey(argument: _walletrpc_KeyReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  DeriveNextKey(argument: _walletrpc_KeyReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  DeriveNextKey(argument: _walletrpc_KeyReqPartial, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveNextKey(argument: _walletrpc_KeyReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveNextKey(argument: _walletrpc_KeyReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveNextKey(argument: _walletrpc_KeyReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  deriveNextKey(argument: _walletrpc_KeyReqPartial, callback: grpc.requestCallback<_signrpc_KeyDescriptor>): grpc.ClientUnaryCall;
  
  EstimateFee(argument: _walletrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  EstimateFee(argument: _walletrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  EstimateFee(argument: _walletrpc_EstimateFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  EstimateFee(argument: _walletrpc_EstimateFeeRequestPartial, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _walletrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _walletrpc_EstimateFeeRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _walletrpc_EstimateFeeRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  estimateFee(argument: _walletrpc_EstimateFeeRequestPartial, callback: grpc.requestCallback<_walletrpc_EstimateFeeResponse>): grpc.ClientUnaryCall;
  
  FinalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  FinalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  FinalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  FinalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  finalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  finalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  finalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  finalizePsbt(argument: _walletrpc_FinalizePsbtRequestPartial, callback: grpc.requestCallback<_walletrpc_FinalizePsbtResponse>): grpc.ClientUnaryCall;
  
  FundPsbt(argument: _walletrpc_FundPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  FundPsbt(argument: _walletrpc_FundPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  FundPsbt(argument: _walletrpc_FundPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  FundPsbt(argument: _walletrpc_FundPsbtRequestPartial, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  fundPsbt(argument: _walletrpc_FundPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  fundPsbt(argument: _walletrpc_FundPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  fundPsbt(argument: _walletrpc_FundPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  fundPsbt(argument: _walletrpc_FundPsbtRequestPartial, callback: grpc.requestCallback<_walletrpc_FundPsbtResponse>): grpc.ClientUnaryCall;
  
  GetTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  GetTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  GetTransaction(argument: _walletrpc_GetTransactionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  GetTransaction(argument: _walletrpc_GetTransactionRequestPartial, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  getTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  getTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  getTransaction(argument: _walletrpc_GetTransactionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  getTransaction(argument: _walletrpc_GetTransactionRequestPartial, callback: grpc.requestCallback<_lnrpc_Transaction>): grpc.ClientUnaryCall;
  
  ImportAccount(argument: _walletrpc_ImportAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  ImportAccount(argument: _walletrpc_ImportAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  ImportAccount(argument: _walletrpc_ImportAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  ImportAccount(argument: _walletrpc_ImportAccountRequestPartial, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  importAccount(argument: _walletrpc_ImportAccountRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  importAccount(argument: _walletrpc_ImportAccountRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  importAccount(argument: _walletrpc_ImportAccountRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  importAccount(argument: _walletrpc_ImportAccountRequestPartial, callback: grpc.requestCallback<_walletrpc_ImportAccountResponse>): grpc.ClientUnaryCall;
  
  ImportPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  ImportPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  ImportPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  ImportPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  importPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  importPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  importPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  importPublicKey(argument: _walletrpc_ImportPublicKeyRequestPartial, callback: grpc.requestCallback<_walletrpc_ImportPublicKeyResponse>): grpc.ClientUnaryCall;
  
  ImportTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  ImportTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  ImportTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  ImportTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  importTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  importTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  importTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  importTapscript(argument: _walletrpc_ImportTapscriptRequestPartial, callback: grpc.requestCallback<_walletrpc_ImportTapscriptResponse>): grpc.ClientUnaryCall;
  
  LabelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  LabelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  LabelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  LabelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  labelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  labelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  labelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  labelTransaction(argument: _walletrpc_LabelTransactionRequestPartial, callback: grpc.requestCallback<_walletrpc_LabelTransactionResponse>): grpc.ClientUnaryCall;
  
  LeaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  LeaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  LeaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  LeaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  leaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  leaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  leaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  leaseOutput(argument: _walletrpc_LeaseOutputRequestPartial, callback: grpc.requestCallback<_walletrpc_LeaseOutputResponse>): grpc.ClientUnaryCall;
  
  ListAccounts(argument: _walletrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  ListAccounts(argument: _walletrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  ListAccounts(argument: _walletrpc_ListAccountsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  ListAccounts(argument: _walletrpc_ListAccountsRequestPartial, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _walletrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _walletrpc_ListAccountsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _walletrpc_ListAccountsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  listAccounts(argument: _walletrpc_ListAccountsRequestPartial, callback: grpc.requestCallback<_walletrpc_ListAccountsResponse>): grpc.ClientUnaryCall;
  
  ListAddresses(argument: _walletrpc_ListAddressesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  ListAddresses(argument: _walletrpc_ListAddressesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  ListAddresses(argument: _walletrpc_ListAddressesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  ListAddresses(argument: _walletrpc_ListAddressesRequestPartial, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  listAddresses(argument: _walletrpc_ListAddressesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  listAddresses(argument: _walletrpc_ListAddressesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  listAddresses(argument: _walletrpc_ListAddressesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  listAddresses(argument: _walletrpc_ListAddressesRequestPartial, callback: grpc.requestCallback<_walletrpc_ListAddressesResponse>): grpc.ClientUnaryCall;
  
  ListLeases(argument: _walletrpc_ListLeasesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  ListLeases(argument: _walletrpc_ListLeasesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  ListLeases(argument: _walletrpc_ListLeasesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  ListLeases(argument: _walletrpc_ListLeasesRequestPartial, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  listLeases(argument: _walletrpc_ListLeasesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  listLeases(argument: _walletrpc_ListLeasesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  listLeases(argument: _walletrpc_ListLeasesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  listLeases(argument: _walletrpc_ListLeasesRequestPartial, callback: grpc.requestCallback<_walletrpc_ListLeasesResponse>): grpc.ClientUnaryCall;
  
  ListSweeps(argument: _walletrpc_ListSweepsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  ListSweeps(argument: _walletrpc_ListSweepsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  ListSweeps(argument: _walletrpc_ListSweepsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  ListSweeps(argument: _walletrpc_ListSweepsRequestPartial, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  listSweeps(argument: _walletrpc_ListSweepsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  listSweeps(argument: _walletrpc_ListSweepsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  listSweeps(argument: _walletrpc_ListSweepsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  listSweeps(argument: _walletrpc_ListSweepsRequestPartial, callback: grpc.requestCallback<_walletrpc_ListSweepsResponse>): grpc.ClientUnaryCall;
  
  ListUnspent(argument: _walletrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  ListUnspent(argument: _walletrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  ListUnspent(argument: _walletrpc_ListUnspentRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  ListUnspent(argument: _walletrpc_ListUnspentRequestPartial, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _walletrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _walletrpc_ListUnspentRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _walletrpc_ListUnspentRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  listUnspent(argument: _walletrpc_ListUnspentRequestPartial, callback: grpc.requestCallback<_walletrpc_ListUnspentResponse>): grpc.ClientUnaryCall;
  
  NextAddr(argument: _walletrpc_AddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  NextAddr(argument: _walletrpc_AddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  NextAddr(argument: _walletrpc_AddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  NextAddr(argument: _walletrpc_AddrRequestPartial, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  nextAddr(argument: _walletrpc_AddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  nextAddr(argument: _walletrpc_AddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  nextAddr(argument: _walletrpc_AddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  nextAddr(argument: _walletrpc_AddrRequestPartial, callback: grpc.requestCallback<_walletrpc_AddrResponse>): grpc.ClientUnaryCall;
  
  PendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  PendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  PendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  PendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  pendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  pendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  pendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  pendingSweeps(argument: _walletrpc_PendingSweepsRequestPartial, callback: grpc.requestCallback<_walletrpc_PendingSweepsResponse>): grpc.ClientUnaryCall;
  
  PublishTransaction(argument: _walletrpc_TransactionPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  PublishTransaction(argument: _walletrpc_TransactionPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  PublishTransaction(argument: _walletrpc_TransactionPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  PublishTransaction(argument: _walletrpc_TransactionPartial, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  publishTransaction(argument: _walletrpc_TransactionPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  publishTransaction(argument: _walletrpc_TransactionPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  publishTransaction(argument: _walletrpc_TransactionPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  publishTransaction(argument: _walletrpc_TransactionPartial, callback: grpc.requestCallback<_walletrpc_PublishResponse>): grpc.ClientUnaryCall;
  
  ReleaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  ReleaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  ReleaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  ReleaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  releaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  releaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  releaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  releaseOutput(argument: _walletrpc_ReleaseOutputRequestPartial, callback: grpc.requestCallback<_walletrpc_ReleaseOutputResponse>): grpc.ClientUnaryCall;
  
  RemoveTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  RemoveTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  RemoveTransaction(argument: _walletrpc_GetTransactionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  RemoveTransaction(argument: _walletrpc_GetTransactionRequestPartial, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  removeTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  removeTransaction(argument: _walletrpc_GetTransactionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  removeTransaction(argument: _walletrpc_GetTransactionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  removeTransaction(argument: _walletrpc_GetTransactionRequestPartial, callback: grpc.requestCallback<_walletrpc_RemoveTransactionResponse>): grpc.ClientUnaryCall;
  
  RequiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  RequiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  RequiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  RequiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  requiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  requiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  requiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  requiredReserve(argument: _walletrpc_RequiredReserveRequestPartial, callback: grpc.requestCallback<_walletrpc_RequiredReserveResponse>): grpc.ClientUnaryCall;
  
  SendOutputs(argument: _walletrpc_SendOutputsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  SendOutputs(argument: _walletrpc_SendOutputsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  SendOutputs(argument: _walletrpc_SendOutputsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  SendOutputs(argument: _walletrpc_SendOutputsRequestPartial, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  sendOutputs(argument: _walletrpc_SendOutputsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  sendOutputs(argument: _walletrpc_SendOutputsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  sendOutputs(argument: _walletrpc_SendOutputsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  sendOutputs(argument: _walletrpc_SendOutputsRequestPartial, callback: grpc.requestCallback<_walletrpc_SendOutputsResponse>): grpc.ClientUnaryCall;
  
  SignMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  SignMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  SignMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  SignMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  signMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  signMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  signMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  signMessageWithAddr(argument: _walletrpc_SignMessageWithAddrRequestPartial, callback: grpc.requestCallback<_walletrpc_SignMessageWithAddrResponse>): grpc.ClientUnaryCall;
  
  SignPsbt(argument: _walletrpc_SignPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  SignPsbt(argument: _walletrpc_SignPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  SignPsbt(argument: _walletrpc_SignPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  SignPsbt(argument: _walletrpc_SignPsbtRequestPartial, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  signPsbt(argument: _walletrpc_SignPsbtRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  signPsbt(argument: _walletrpc_SignPsbtRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  signPsbt(argument: _walletrpc_SignPsbtRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  signPsbt(argument: _walletrpc_SignPsbtRequestPartial, callback: grpc.requestCallback<_walletrpc_SignPsbtResponse>): grpc.ClientUnaryCall;
  
  VerifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  VerifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  VerifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  VerifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  verifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  verifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  verifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  verifyMessageWithAddr(argument: _walletrpc_VerifyMessageWithAddrRequestPartial, callback: grpc.requestCallback<_walletrpc_VerifyMessageWithAddrResponse>): grpc.ClientUnaryCall;
  
}

export interface WalletKitHandlers extends grpc.UntypedServiceImplementation {
  BumpFee: grpc.handleUnaryCall<_walletrpc_BumpFeeRequest, _walletrpc_BumpFeeResponsePartial>;
  
  DeriveKey: grpc.handleUnaryCall<_signrpc_KeyLocator, _signrpc_KeyDescriptorPartial>;
  
  DeriveNextKey: grpc.handleUnaryCall<_walletrpc_KeyReq, _signrpc_KeyDescriptorPartial>;
  
  EstimateFee: grpc.handleUnaryCall<_walletrpc_EstimateFeeRequest, _walletrpc_EstimateFeeResponsePartial>;
  
  FinalizePsbt: grpc.handleUnaryCall<_walletrpc_FinalizePsbtRequest, _walletrpc_FinalizePsbtResponsePartial>;
  
  FundPsbt: grpc.handleUnaryCall<_walletrpc_FundPsbtRequest, _walletrpc_FundPsbtResponsePartial>;
  
  GetTransaction: grpc.handleUnaryCall<_walletrpc_GetTransactionRequest, _lnrpc_TransactionPartial>;
  
  ImportAccount: grpc.handleUnaryCall<_walletrpc_ImportAccountRequest, _walletrpc_ImportAccountResponsePartial>;
  
  ImportPublicKey: grpc.handleUnaryCall<_walletrpc_ImportPublicKeyRequest, _walletrpc_ImportPublicKeyResponsePartial>;
  
  ImportTapscript: grpc.handleUnaryCall<_walletrpc_ImportTapscriptRequest, _walletrpc_ImportTapscriptResponsePartial>;
  
  LabelTransaction: grpc.handleUnaryCall<_walletrpc_LabelTransactionRequest, _walletrpc_LabelTransactionResponsePartial>;
  
  LeaseOutput: grpc.handleUnaryCall<_walletrpc_LeaseOutputRequest, _walletrpc_LeaseOutputResponsePartial>;
  
  ListAccounts: grpc.handleUnaryCall<_walletrpc_ListAccountsRequest, _walletrpc_ListAccountsResponsePartial>;
  
  ListAddresses: grpc.handleUnaryCall<_walletrpc_ListAddressesRequest, _walletrpc_ListAddressesResponsePartial>;
  
  ListLeases: grpc.handleUnaryCall<_walletrpc_ListLeasesRequest, _walletrpc_ListLeasesResponsePartial>;
  
  ListSweeps: grpc.handleUnaryCall<_walletrpc_ListSweepsRequest, _walletrpc_ListSweepsResponsePartial>;
  
  ListUnspent: grpc.handleUnaryCall<_walletrpc_ListUnspentRequest, _walletrpc_ListUnspentResponsePartial>;
  
  NextAddr: grpc.handleUnaryCall<_walletrpc_AddrRequest, _walletrpc_AddrResponsePartial>;
  
  PendingSweeps: grpc.handleUnaryCall<_walletrpc_PendingSweepsRequest, _walletrpc_PendingSweepsResponsePartial>;
  
  PublishTransaction: grpc.handleUnaryCall<_walletrpc_Transaction, _walletrpc_PublishResponsePartial>;
  
  ReleaseOutput: grpc.handleUnaryCall<_walletrpc_ReleaseOutputRequest, _walletrpc_ReleaseOutputResponsePartial>;
  
  RemoveTransaction: grpc.handleUnaryCall<_walletrpc_GetTransactionRequest, _walletrpc_RemoveTransactionResponsePartial>;
  
  RequiredReserve: grpc.handleUnaryCall<_walletrpc_RequiredReserveRequest, _walletrpc_RequiredReserveResponsePartial>;
  
  SendOutputs: grpc.handleUnaryCall<_walletrpc_SendOutputsRequest, _walletrpc_SendOutputsResponsePartial>;
  
  SignMessageWithAddr: grpc.handleUnaryCall<_walletrpc_SignMessageWithAddrRequest, _walletrpc_SignMessageWithAddrResponsePartial>;
  
  SignPsbt: grpc.handleUnaryCall<_walletrpc_SignPsbtRequest, _walletrpc_SignPsbtResponsePartial>;
  
  VerifyMessageWithAddr: grpc.handleUnaryCall<_walletrpc_VerifyMessageWithAddrRequest, _walletrpc_VerifyMessageWithAddrResponsePartial>;
  
}

export interface WalletKitDefinition extends grpc.ServiceDefinition {
  BumpFee: MethodDefinition<_walletrpc_BumpFeeRequestPartial, _walletrpc_BumpFeeResponsePartial, _walletrpc_BumpFeeRequest, _walletrpc_BumpFeeResponse>
  DeriveKey: MethodDefinition<_signrpc_KeyLocatorPartial, _signrpc_KeyDescriptorPartial, _signrpc_KeyLocator, _signrpc_KeyDescriptor>
  DeriveNextKey: MethodDefinition<_walletrpc_KeyReqPartial, _signrpc_KeyDescriptorPartial, _walletrpc_KeyReq, _signrpc_KeyDescriptor>
  EstimateFee: MethodDefinition<_walletrpc_EstimateFeeRequestPartial, _walletrpc_EstimateFeeResponsePartial, _walletrpc_EstimateFeeRequest, _walletrpc_EstimateFeeResponse>
  FinalizePsbt: MethodDefinition<_walletrpc_FinalizePsbtRequestPartial, _walletrpc_FinalizePsbtResponsePartial, _walletrpc_FinalizePsbtRequest, _walletrpc_FinalizePsbtResponse>
  FundPsbt: MethodDefinition<_walletrpc_FundPsbtRequestPartial, _walletrpc_FundPsbtResponsePartial, _walletrpc_FundPsbtRequest, _walletrpc_FundPsbtResponse>
  GetTransaction: MethodDefinition<_walletrpc_GetTransactionRequestPartial, _lnrpc_TransactionPartial, _walletrpc_GetTransactionRequest, _lnrpc_Transaction>
  ImportAccount: MethodDefinition<_walletrpc_ImportAccountRequestPartial, _walletrpc_ImportAccountResponsePartial, _walletrpc_ImportAccountRequest, _walletrpc_ImportAccountResponse>
  ImportPublicKey: MethodDefinition<_walletrpc_ImportPublicKeyRequestPartial, _walletrpc_ImportPublicKeyResponsePartial, _walletrpc_ImportPublicKeyRequest, _walletrpc_ImportPublicKeyResponse>
  ImportTapscript: MethodDefinition<_walletrpc_ImportTapscriptRequestPartial, _walletrpc_ImportTapscriptResponsePartial, _walletrpc_ImportTapscriptRequest, _walletrpc_ImportTapscriptResponse>
  LabelTransaction: MethodDefinition<_walletrpc_LabelTransactionRequestPartial, _walletrpc_LabelTransactionResponsePartial, _walletrpc_LabelTransactionRequest, _walletrpc_LabelTransactionResponse>
  LeaseOutput: MethodDefinition<_walletrpc_LeaseOutputRequestPartial, _walletrpc_LeaseOutputResponsePartial, _walletrpc_LeaseOutputRequest, _walletrpc_LeaseOutputResponse>
  ListAccounts: MethodDefinition<_walletrpc_ListAccountsRequestPartial, _walletrpc_ListAccountsResponsePartial, _walletrpc_ListAccountsRequest, _walletrpc_ListAccountsResponse>
  ListAddresses: MethodDefinition<_walletrpc_ListAddressesRequestPartial, _walletrpc_ListAddressesResponsePartial, _walletrpc_ListAddressesRequest, _walletrpc_ListAddressesResponse>
  ListLeases: MethodDefinition<_walletrpc_ListLeasesRequestPartial, _walletrpc_ListLeasesResponsePartial, _walletrpc_ListLeasesRequest, _walletrpc_ListLeasesResponse>
  ListSweeps: MethodDefinition<_walletrpc_ListSweepsRequestPartial, _walletrpc_ListSweepsResponsePartial, _walletrpc_ListSweepsRequest, _walletrpc_ListSweepsResponse>
  ListUnspent: MethodDefinition<_walletrpc_ListUnspentRequestPartial, _walletrpc_ListUnspentResponsePartial, _walletrpc_ListUnspentRequest, _walletrpc_ListUnspentResponse>
  NextAddr: MethodDefinition<_walletrpc_AddrRequestPartial, _walletrpc_AddrResponsePartial, _walletrpc_AddrRequest, _walletrpc_AddrResponse>
  PendingSweeps: MethodDefinition<_walletrpc_PendingSweepsRequestPartial, _walletrpc_PendingSweepsResponsePartial, _walletrpc_PendingSweepsRequest, _walletrpc_PendingSweepsResponse>
  PublishTransaction: MethodDefinition<_walletrpc_TransactionPartial, _walletrpc_PublishResponsePartial, _walletrpc_Transaction, _walletrpc_PublishResponse>
  ReleaseOutput: MethodDefinition<_walletrpc_ReleaseOutputRequestPartial, _walletrpc_ReleaseOutputResponsePartial, _walletrpc_ReleaseOutputRequest, _walletrpc_ReleaseOutputResponse>
  RemoveTransaction: MethodDefinition<_walletrpc_GetTransactionRequestPartial, _walletrpc_RemoveTransactionResponsePartial, _walletrpc_GetTransactionRequest, _walletrpc_RemoveTransactionResponse>
  RequiredReserve: MethodDefinition<_walletrpc_RequiredReserveRequestPartial, _walletrpc_RequiredReserveResponsePartial, _walletrpc_RequiredReserveRequest, _walletrpc_RequiredReserveResponse>
  SendOutputs: MethodDefinition<_walletrpc_SendOutputsRequestPartial, _walletrpc_SendOutputsResponsePartial, _walletrpc_SendOutputsRequest, _walletrpc_SendOutputsResponse>
  SignMessageWithAddr: MethodDefinition<_walletrpc_SignMessageWithAddrRequestPartial, _walletrpc_SignMessageWithAddrResponsePartial, _walletrpc_SignMessageWithAddrRequest, _walletrpc_SignMessageWithAddrResponse>
  SignPsbt: MethodDefinition<_walletrpc_SignPsbtRequestPartial, _walletrpc_SignPsbtResponsePartial, _walletrpc_SignPsbtRequest, _walletrpc_SignPsbtResponse>
  VerifyMessageWithAddr: MethodDefinition<_walletrpc_VerifyMessageWithAddrRequestPartial, _walletrpc_VerifyMessageWithAddrResponsePartial, _walletrpc_VerifyMessageWithAddrRequest, _walletrpc_VerifyMessageWithAddrResponse>
}
