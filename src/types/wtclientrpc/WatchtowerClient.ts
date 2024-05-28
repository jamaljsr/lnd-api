// Original file: protos/wtclientrpc/wtclient.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddTowerRequestPartial as _wtclientrpc_AddTowerRequestPartial, AddTowerRequest as _wtclientrpc_AddTowerRequest } from '../wtclientrpc/AddTowerRequest';
import type { AddTowerResponsePartial as _wtclientrpc_AddTowerResponsePartial, AddTowerResponse as _wtclientrpc_AddTowerResponse } from '../wtclientrpc/AddTowerResponse';
import type { DeactivateTowerRequestPartial as _wtclientrpc_DeactivateTowerRequestPartial, DeactivateTowerRequest as _wtclientrpc_DeactivateTowerRequest } from '../wtclientrpc/DeactivateTowerRequest';
import type { DeactivateTowerResponsePartial as _wtclientrpc_DeactivateTowerResponsePartial, DeactivateTowerResponse as _wtclientrpc_DeactivateTowerResponse } from '../wtclientrpc/DeactivateTowerResponse';
import type { GetTowerInfoRequestPartial as _wtclientrpc_GetTowerInfoRequestPartial, GetTowerInfoRequest as _wtclientrpc_GetTowerInfoRequest } from '../wtclientrpc/GetTowerInfoRequest';
import type { ListTowersRequestPartial as _wtclientrpc_ListTowersRequestPartial, ListTowersRequest as _wtclientrpc_ListTowersRequest } from '../wtclientrpc/ListTowersRequest';
import type { ListTowersResponsePartial as _wtclientrpc_ListTowersResponsePartial, ListTowersResponse as _wtclientrpc_ListTowersResponse } from '../wtclientrpc/ListTowersResponse';
import type { PolicyRequestPartial as _wtclientrpc_PolicyRequestPartial, PolicyRequest as _wtclientrpc_PolicyRequest } from '../wtclientrpc/PolicyRequest';
import type { PolicyResponsePartial as _wtclientrpc_PolicyResponsePartial, PolicyResponse as _wtclientrpc_PolicyResponse } from '../wtclientrpc/PolicyResponse';
import type { RemoveTowerRequestPartial as _wtclientrpc_RemoveTowerRequestPartial, RemoveTowerRequest as _wtclientrpc_RemoveTowerRequest } from '../wtclientrpc/RemoveTowerRequest';
import type { RemoveTowerResponsePartial as _wtclientrpc_RemoveTowerResponsePartial, RemoveTowerResponse as _wtclientrpc_RemoveTowerResponse } from '../wtclientrpc/RemoveTowerResponse';
import type { StatsRequestPartial as _wtclientrpc_StatsRequestPartial, StatsRequest as _wtclientrpc_StatsRequest } from '../wtclientrpc/StatsRequest';
import type { StatsResponsePartial as _wtclientrpc_StatsResponsePartial, StatsResponse as _wtclientrpc_StatsResponse } from '../wtclientrpc/StatsResponse';
import type { TerminateSessionRequestPartial as _wtclientrpc_TerminateSessionRequestPartial, TerminateSessionRequest as _wtclientrpc_TerminateSessionRequest } from '../wtclientrpc/TerminateSessionRequest';
import type { TerminateSessionResponsePartial as _wtclientrpc_TerminateSessionResponsePartial, TerminateSessionResponse as _wtclientrpc_TerminateSessionResponse } from '../wtclientrpc/TerminateSessionResponse';
import type { TowerPartial as _wtclientrpc_TowerPartial, Tower as _wtclientrpc_Tower } from '../wtclientrpc/Tower';

export interface WatchtowerClientClient extends grpc.Client {
  AddTower(argument: _wtclientrpc_AddTowerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  AddTower(argument: _wtclientrpc_AddTowerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  AddTower(argument: _wtclientrpc_AddTowerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  AddTower(argument: _wtclientrpc_AddTowerRequestPartial, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  addTower(argument: _wtclientrpc_AddTowerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  addTower(argument: _wtclientrpc_AddTowerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  addTower(argument: _wtclientrpc_AddTowerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  addTower(argument: _wtclientrpc_AddTowerRequestPartial, callback: grpc.requestCallback<_wtclientrpc_AddTowerResponse>): grpc.ClientUnaryCall;
  
  DeactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  DeactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  DeactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  DeactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  deactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  deactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  deactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  deactivateTower(argument: _wtclientrpc_DeactivateTowerRequestPartial, callback: grpc.requestCallback<_wtclientrpc_DeactivateTowerResponse>): grpc.ClientUnaryCall;
  
  GetTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  GetTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  GetTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  GetTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  getTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  getTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  getTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  getTowerInfo(argument: _wtclientrpc_GetTowerInfoRequestPartial, callback: grpc.requestCallback<_wtclientrpc_Tower>): grpc.ClientUnaryCall;
  
  ListTowers(argument: _wtclientrpc_ListTowersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  ListTowers(argument: _wtclientrpc_ListTowersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  ListTowers(argument: _wtclientrpc_ListTowersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  ListTowers(argument: _wtclientrpc_ListTowersRequestPartial, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  listTowers(argument: _wtclientrpc_ListTowersRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  listTowers(argument: _wtclientrpc_ListTowersRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  listTowers(argument: _wtclientrpc_ListTowersRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  listTowers(argument: _wtclientrpc_ListTowersRequestPartial, callback: grpc.requestCallback<_wtclientrpc_ListTowersResponse>): grpc.ClientUnaryCall;
  
  Policy(argument: _wtclientrpc_PolicyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  Policy(argument: _wtclientrpc_PolicyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  Policy(argument: _wtclientrpc_PolicyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  Policy(argument: _wtclientrpc_PolicyRequestPartial, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  policy(argument: _wtclientrpc_PolicyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  policy(argument: _wtclientrpc_PolicyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  policy(argument: _wtclientrpc_PolicyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  policy(argument: _wtclientrpc_PolicyRequestPartial, callback: grpc.requestCallback<_wtclientrpc_PolicyResponse>): grpc.ClientUnaryCall;
  
  RemoveTower(argument: _wtclientrpc_RemoveTowerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  RemoveTower(argument: _wtclientrpc_RemoveTowerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  RemoveTower(argument: _wtclientrpc_RemoveTowerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  RemoveTower(argument: _wtclientrpc_RemoveTowerRequestPartial, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  removeTower(argument: _wtclientrpc_RemoveTowerRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  removeTower(argument: _wtclientrpc_RemoveTowerRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  removeTower(argument: _wtclientrpc_RemoveTowerRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  removeTower(argument: _wtclientrpc_RemoveTowerRequestPartial, callback: grpc.requestCallback<_wtclientrpc_RemoveTowerResponse>): grpc.ClientUnaryCall;
  
  Stats(argument: _wtclientrpc_StatsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  Stats(argument: _wtclientrpc_StatsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  Stats(argument: _wtclientrpc_StatsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  Stats(argument: _wtclientrpc_StatsRequestPartial, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  stats(argument: _wtclientrpc_StatsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  stats(argument: _wtclientrpc_StatsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  stats(argument: _wtclientrpc_StatsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  stats(argument: _wtclientrpc_StatsRequestPartial, callback: grpc.requestCallback<_wtclientrpc_StatsResponse>): grpc.ClientUnaryCall;
  
  TerminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  TerminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  TerminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  TerminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  terminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  terminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  terminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  terminateSession(argument: _wtclientrpc_TerminateSessionRequestPartial, callback: grpc.requestCallback<_wtclientrpc_TerminateSessionResponse>): grpc.ClientUnaryCall;
  
}

export interface WatchtowerClientHandlers extends grpc.UntypedServiceImplementation {
  AddTower: grpc.handleUnaryCall<_wtclientrpc_AddTowerRequest, _wtclientrpc_AddTowerResponsePartial>;
  
  DeactivateTower: grpc.handleUnaryCall<_wtclientrpc_DeactivateTowerRequest, _wtclientrpc_DeactivateTowerResponsePartial>;
  
  GetTowerInfo: grpc.handleUnaryCall<_wtclientrpc_GetTowerInfoRequest, _wtclientrpc_TowerPartial>;
  
  ListTowers: grpc.handleUnaryCall<_wtclientrpc_ListTowersRequest, _wtclientrpc_ListTowersResponsePartial>;
  
  Policy: grpc.handleUnaryCall<_wtclientrpc_PolicyRequest, _wtclientrpc_PolicyResponsePartial>;
  
  RemoveTower: grpc.handleUnaryCall<_wtclientrpc_RemoveTowerRequest, _wtclientrpc_RemoveTowerResponsePartial>;
  
  Stats: grpc.handleUnaryCall<_wtclientrpc_StatsRequest, _wtclientrpc_StatsResponsePartial>;
  
  TerminateSession: grpc.handleUnaryCall<_wtclientrpc_TerminateSessionRequest, _wtclientrpc_TerminateSessionResponsePartial>;
  
}

export interface WatchtowerClientDefinition extends grpc.ServiceDefinition {
  AddTower: MethodDefinition<_wtclientrpc_AddTowerRequestPartial, _wtclientrpc_AddTowerResponsePartial, _wtclientrpc_AddTowerRequest, _wtclientrpc_AddTowerResponse>
  DeactivateTower: MethodDefinition<_wtclientrpc_DeactivateTowerRequestPartial, _wtclientrpc_DeactivateTowerResponsePartial, _wtclientrpc_DeactivateTowerRequest, _wtclientrpc_DeactivateTowerResponse>
  GetTowerInfo: MethodDefinition<_wtclientrpc_GetTowerInfoRequestPartial, _wtclientrpc_TowerPartial, _wtclientrpc_GetTowerInfoRequest, _wtclientrpc_Tower>
  ListTowers: MethodDefinition<_wtclientrpc_ListTowersRequestPartial, _wtclientrpc_ListTowersResponsePartial, _wtclientrpc_ListTowersRequest, _wtclientrpc_ListTowersResponse>
  Policy: MethodDefinition<_wtclientrpc_PolicyRequestPartial, _wtclientrpc_PolicyResponsePartial, _wtclientrpc_PolicyRequest, _wtclientrpc_PolicyResponse>
  RemoveTower: MethodDefinition<_wtclientrpc_RemoveTowerRequestPartial, _wtclientrpc_RemoveTowerResponsePartial, _wtclientrpc_RemoveTowerRequest, _wtclientrpc_RemoveTowerResponse>
  Stats: MethodDefinition<_wtclientrpc_StatsRequestPartial, _wtclientrpc_StatsResponsePartial, _wtclientrpc_StatsRequest, _wtclientrpc_StatsResponse>
  TerminateSession: MethodDefinition<_wtclientrpc_TerminateSessionRequestPartial, _wtclientrpc_TerminateSessionResponsePartial, _wtclientrpc_TerminateSessionRequest, _wtclientrpc_TerminateSessionResponse>
}
