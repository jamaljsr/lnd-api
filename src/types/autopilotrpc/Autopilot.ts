// Original file: protos/autopilotrpc/autopilot.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ModifyStatusRequestPartial as _autopilotrpc_ModifyStatusRequestPartial, ModifyStatusRequest as _autopilotrpc_ModifyStatusRequest } from '../autopilotrpc/ModifyStatusRequest';
import type { ModifyStatusResponsePartial as _autopilotrpc_ModifyStatusResponsePartial, ModifyStatusResponse as _autopilotrpc_ModifyStatusResponse } from '../autopilotrpc/ModifyStatusResponse';
import type { QueryScoresRequestPartial as _autopilotrpc_QueryScoresRequestPartial, QueryScoresRequest as _autopilotrpc_QueryScoresRequest } from '../autopilotrpc/QueryScoresRequest';
import type { QueryScoresResponsePartial as _autopilotrpc_QueryScoresResponsePartial, QueryScoresResponse as _autopilotrpc_QueryScoresResponse } from '../autopilotrpc/QueryScoresResponse';
import type { SetScoresRequestPartial as _autopilotrpc_SetScoresRequestPartial, SetScoresRequest as _autopilotrpc_SetScoresRequest } from '../autopilotrpc/SetScoresRequest';
import type { SetScoresResponsePartial as _autopilotrpc_SetScoresResponsePartial, SetScoresResponse as _autopilotrpc_SetScoresResponse } from '../autopilotrpc/SetScoresResponse';
import type { StatusRequestPartial as _autopilotrpc_StatusRequestPartial, StatusRequest as _autopilotrpc_StatusRequest } from '../autopilotrpc/StatusRequest';
import type { StatusResponsePartial as _autopilotrpc_StatusResponsePartial, StatusResponse as _autopilotrpc_StatusResponse } from '../autopilotrpc/StatusResponse';

export interface AutopilotClient extends grpc.Client {
  ModifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  ModifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  ModifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  ModifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  modifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  modifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  modifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  modifyStatus(argument: _autopilotrpc_ModifyStatusRequestPartial, callback: grpc.requestCallback<_autopilotrpc_ModifyStatusResponse>): grpc.ClientUnaryCall;
  
  QueryScores(argument: _autopilotrpc_QueryScoresRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  QueryScores(argument: _autopilotrpc_QueryScoresRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  QueryScores(argument: _autopilotrpc_QueryScoresRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  QueryScores(argument: _autopilotrpc_QueryScoresRequestPartial, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  queryScores(argument: _autopilotrpc_QueryScoresRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  queryScores(argument: _autopilotrpc_QueryScoresRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  queryScores(argument: _autopilotrpc_QueryScoresRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  queryScores(argument: _autopilotrpc_QueryScoresRequestPartial, callback: grpc.requestCallback<_autopilotrpc_QueryScoresResponse>): grpc.ClientUnaryCall;
  
  SetScores(argument: _autopilotrpc_SetScoresRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  SetScores(argument: _autopilotrpc_SetScoresRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  SetScores(argument: _autopilotrpc_SetScoresRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  SetScores(argument: _autopilotrpc_SetScoresRequestPartial, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  setScores(argument: _autopilotrpc_SetScoresRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  setScores(argument: _autopilotrpc_SetScoresRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  setScores(argument: _autopilotrpc_SetScoresRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  setScores(argument: _autopilotrpc_SetScoresRequestPartial, callback: grpc.requestCallback<_autopilotrpc_SetScoresResponse>): grpc.ClientUnaryCall;
  
  Status(argument: _autopilotrpc_StatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  Status(argument: _autopilotrpc_StatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  Status(argument: _autopilotrpc_StatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  Status(argument: _autopilotrpc_StatusRequestPartial, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _autopilotrpc_StatusRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _autopilotrpc_StatusRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _autopilotrpc_StatusRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  status(argument: _autopilotrpc_StatusRequestPartial, callback: grpc.requestCallback<_autopilotrpc_StatusResponse>): grpc.ClientUnaryCall;
  
}

export interface AutopilotHandlers extends grpc.UntypedServiceImplementation {
  ModifyStatus: grpc.handleUnaryCall<_autopilotrpc_ModifyStatusRequest, _autopilotrpc_ModifyStatusResponsePartial>;
  
  QueryScores: grpc.handleUnaryCall<_autopilotrpc_QueryScoresRequest, _autopilotrpc_QueryScoresResponsePartial>;
  
  SetScores: grpc.handleUnaryCall<_autopilotrpc_SetScoresRequest, _autopilotrpc_SetScoresResponsePartial>;
  
  Status: grpc.handleUnaryCall<_autopilotrpc_StatusRequest, _autopilotrpc_StatusResponsePartial>;
  
}

export interface AutopilotDefinition extends grpc.ServiceDefinition {
  ModifyStatus: MethodDefinition<_autopilotrpc_ModifyStatusRequestPartial, _autopilotrpc_ModifyStatusResponsePartial, _autopilotrpc_ModifyStatusRequest, _autopilotrpc_ModifyStatusResponse>
  QueryScores: MethodDefinition<_autopilotrpc_QueryScoresRequestPartial, _autopilotrpc_QueryScoresResponsePartial, _autopilotrpc_QueryScoresRequest, _autopilotrpc_QueryScoresResponse>
  SetScores: MethodDefinition<_autopilotrpc_SetScoresRequestPartial, _autopilotrpc_SetScoresResponsePartial, _autopilotrpc_SetScoresRequest, _autopilotrpc_SetScoresResponse>
  Status: MethodDefinition<_autopilotrpc_StatusRequestPartial, _autopilotrpc_StatusResponsePartial, _autopilotrpc_StatusRequest, _autopilotrpc_StatusResponse>
}
