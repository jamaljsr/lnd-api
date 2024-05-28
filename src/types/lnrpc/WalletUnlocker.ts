// Original file: protos/walletunlocker.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChangePasswordRequestPartial as _lnrpc_ChangePasswordRequestPartial, ChangePasswordRequest as _lnrpc_ChangePasswordRequest } from '../lnrpc/ChangePasswordRequest';
import type { ChangePasswordResponsePartial as _lnrpc_ChangePasswordResponsePartial, ChangePasswordResponse as _lnrpc_ChangePasswordResponse } from '../lnrpc/ChangePasswordResponse';
import type { GenSeedRequestPartial as _lnrpc_GenSeedRequestPartial, GenSeedRequest as _lnrpc_GenSeedRequest } from '../lnrpc/GenSeedRequest';
import type { GenSeedResponsePartial as _lnrpc_GenSeedResponsePartial, GenSeedResponse as _lnrpc_GenSeedResponse } from '../lnrpc/GenSeedResponse';
import type { InitWalletRequestPartial as _lnrpc_InitWalletRequestPartial, InitWalletRequest as _lnrpc_InitWalletRequest } from '../lnrpc/InitWalletRequest';
import type { InitWalletResponsePartial as _lnrpc_InitWalletResponsePartial, InitWalletResponse as _lnrpc_InitWalletResponse } from '../lnrpc/InitWalletResponse';
import type { UnlockWalletRequestPartial as _lnrpc_UnlockWalletRequestPartial, UnlockWalletRequest as _lnrpc_UnlockWalletRequest } from '../lnrpc/UnlockWalletRequest';
import type { UnlockWalletResponsePartial as _lnrpc_UnlockWalletResponsePartial, UnlockWalletResponse as _lnrpc_UnlockWalletResponse } from '../lnrpc/UnlockWalletResponse';

export interface WalletUnlockerClient extends grpc.Client {
  ChangePassword(argument: _lnrpc_ChangePasswordRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  ChangePassword(argument: _lnrpc_ChangePasswordRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  ChangePassword(argument: _lnrpc_ChangePasswordRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  ChangePassword(argument: _lnrpc_ChangePasswordRequestPartial, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  changePassword(argument: _lnrpc_ChangePasswordRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  changePassword(argument: _lnrpc_ChangePasswordRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  changePassword(argument: _lnrpc_ChangePasswordRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  changePassword(argument: _lnrpc_ChangePasswordRequestPartial, callback: grpc.requestCallback<_lnrpc_ChangePasswordResponse>): grpc.ClientUnaryCall;
  
  GenSeed(argument: _lnrpc_GenSeedRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  GenSeed(argument: _lnrpc_GenSeedRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  GenSeed(argument: _lnrpc_GenSeedRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  GenSeed(argument: _lnrpc_GenSeedRequestPartial, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _lnrpc_GenSeedRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _lnrpc_GenSeedRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _lnrpc_GenSeedRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  genSeed(argument: _lnrpc_GenSeedRequestPartial, callback: grpc.requestCallback<_lnrpc_GenSeedResponse>): grpc.ClientUnaryCall;
  
  InitWallet(argument: _lnrpc_InitWalletRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  InitWallet(argument: _lnrpc_InitWalletRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  InitWallet(argument: _lnrpc_InitWalletRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  InitWallet(argument: _lnrpc_InitWalletRequestPartial, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  initWallet(argument: _lnrpc_InitWalletRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  initWallet(argument: _lnrpc_InitWalletRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  initWallet(argument: _lnrpc_InitWalletRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  initWallet(argument: _lnrpc_InitWalletRequestPartial, callback: grpc.requestCallback<_lnrpc_InitWalletResponse>): grpc.ClientUnaryCall;
  
  UnlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  UnlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  UnlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  UnlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  unlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  unlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  unlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  unlockWallet(argument: _lnrpc_UnlockWalletRequestPartial, callback: grpc.requestCallback<_lnrpc_UnlockWalletResponse>): grpc.ClientUnaryCall;
  
}

export interface WalletUnlockerHandlers extends grpc.UntypedServiceImplementation {
  ChangePassword: grpc.handleUnaryCall<_lnrpc_ChangePasswordRequest, _lnrpc_ChangePasswordResponsePartial>;
  
  GenSeed: grpc.handleUnaryCall<_lnrpc_GenSeedRequest, _lnrpc_GenSeedResponsePartial>;
  
  InitWallet: grpc.handleUnaryCall<_lnrpc_InitWalletRequest, _lnrpc_InitWalletResponsePartial>;
  
  UnlockWallet: grpc.handleUnaryCall<_lnrpc_UnlockWalletRequest, _lnrpc_UnlockWalletResponsePartial>;
  
}

export interface WalletUnlockerDefinition extends grpc.ServiceDefinition {
  ChangePassword: MethodDefinition<_lnrpc_ChangePasswordRequestPartial, _lnrpc_ChangePasswordResponsePartial, _lnrpc_ChangePasswordRequest, _lnrpc_ChangePasswordResponse>
  GenSeed: MethodDefinition<_lnrpc_GenSeedRequestPartial, _lnrpc_GenSeedResponsePartial, _lnrpc_GenSeedRequest, _lnrpc_GenSeedResponse>
  InitWallet: MethodDefinition<_lnrpc_InitWalletRequestPartial, _lnrpc_InitWalletResponsePartial, _lnrpc_InitWalletRequest, _lnrpc_InitWalletResponse>
  UnlockWallet: MethodDefinition<_lnrpc_UnlockWalletRequestPartial, _lnrpc_UnlockWalletResponsePartial, _lnrpc_UnlockWalletRequest, _lnrpc_UnlockWalletResponse>
}
