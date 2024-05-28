// Original file: protos/signrpc/signer.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { InputScriptRespPartial as _signrpc_InputScriptRespPartial, InputScriptResp as _signrpc_InputScriptResp } from '../signrpc/InputScriptResp';
import type { MuSig2CleanupRequestPartial as _signrpc_MuSig2CleanupRequestPartial, MuSig2CleanupRequest as _signrpc_MuSig2CleanupRequest } from '../signrpc/MuSig2CleanupRequest';
import type { MuSig2CleanupResponsePartial as _signrpc_MuSig2CleanupResponsePartial, MuSig2CleanupResponse as _signrpc_MuSig2CleanupResponse } from '../signrpc/MuSig2CleanupResponse';
import type { MuSig2CombineKeysRequestPartial as _signrpc_MuSig2CombineKeysRequestPartial, MuSig2CombineKeysRequest as _signrpc_MuSig2CombineKeysRequest } from '../signrpc/MuSig2CombineKeysRequest';
import type { MuSig2CombineKeysResponsePartial as _signrpc_MuSig2CombineKeysResponsePartial, MuSig2CombineKeysResponse as _signrpc_MuSig2CombineKeysResponse } from '../signrpc/MuSig2CombineKeysResponse';
import type { MuSig2CombineSigRequestPartial as _signrpc_MuSig2CombineSigRequestPartial, MuSig2CombineSigRequest as _signrpc_MuSig2CombineSigRequest } from '../signrpc/MuSig2CombineSigRequest';
import type { MuSig2CombineSigResponsePartial as _signrpc_MuSig2CombineSigResponsePartial, MuSig2CombineSigResponse as _signrpc_MuSig2CombineSigResponse } from '../signrpc/MuSig2CombineSigResponse';
import type { MuSig2RegisterNoncesRequestPartial as _signrpc_MuSig2RegisterNoncesRequestPartial, MuSig2RegisterNoncesRequest as _signrpc_MuSig2RegisterNoncesRequest } from '../signrpc/MuSig2RegisterNoncesRequest';
import type { MuSig2RegisterNoncesResponsePartial as _signrpc_MuSig2RegisterNoncesResponsePartial, MuSig2RegisterNoncesResponse as _signrpc_MuSig2RegisterNoncesResponse } from '../signrpc/MuSig2RegisterNoncesResponse';
import type { MuSig2SessionRequestPartial as _signrpc_MuSig2SessionRequestPartial, MuSig2SessionRequest as _signrpc_MuSig2SessionRequest } from '../signrpc/MuSig2SessionRequest';
import type { MuSig2SessionResponsePartial as _signrpc_MuSig2SessionResponsePartial, MuSig2SessionResponse as _signrpc_MuSig2SessionResponse } from '../signrpc/MuSig2SessionResponse';
import type { MuSig2SignRequestPartial as _signrpc_MuSig2SignRequestPartial, MuSig2SignRequest as _signrpc_MuSig2SignRequest } from '../signrpc/MuSig2SignRequest';
import type { MuSig2SignResponsePartial as _signrpc_MuSig2SignResponsePartial, MuSig2SignResponse as _signrpc_MuSig2SignResponse } from '../signrpc/MuSig2SignResponse';
import type { SharedKeyRequestPartial as _signrpc_SharedKeyRequestPartial, SharedKeyRequest as _signrpc_SharedKeyRequest } from '../signrpc/SharedKeyRequest';
import type { SharedKeyResponsePartial as _signrpc_SharedKeyResponsePartial, SharedKeyResponse as _signrpc_SharedKeyResponse } from '../signrpc/SharedKeyResponse';
import type { SignMessageReqPartial as _signrpc_SignMessageReqPartial, SignMessageReq as _signrpc_SignMessageReq } from '../signrpc/SignMessageReq';
import type { SignMessageRespPartial as _signrpc_SignMessageRespPartial, SignMessageResp as _signrpc_SignMessageResp } from '../signrpc/SignMessageResp';
import type { SignReqPartial as _signrpc_SignReqPartial, SignReq as _signrpc_SignReq } from '../signrpc/SignReq';
import type { SignRespPartial as _signrpc_SignRespPartial, SignResp as _signrpc_SignResp } from '../signrpc/SignResp';
import type { VerifyMessageReqPartial as _signrpc_VerifyMessageReqPartial, VerifyMessageReq as _signrpc_VerifyMessageReq } from '../signrpc/VerifyMessageReq';
import type { VerifyMessageRespPartial as _signrpc_VerifyMessageRespPartial, VerifyMessageResp as _signrpc_VerifyMessageResp } from '../signrpc/VerifyMessageResp';

export interface SignerClient extends grpc.Client {
  ComputeInputScript(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  ComputeInputScript(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  ComputeInputScript(argument: _signrpc_SignReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  ComputeInputScript(argument: _signrpc_SignReqPartial, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  computeInputScript(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  computeInputScript(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  computeInputScript(argument: _signrpc_SignReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  computeInputScript(argument: _signrpc_SignReqPartial, callback: grpc.requestCallback<_signrpc_InputScriptResp>): grpc.ClientUnaryCall;
  
  DeriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  DeriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  DeriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  DeriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  deriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  deriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  deriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  deriveSharedKey(argument: _signrpc_SharedKeyRequestPartial, callback: grpc.requestCallback<_signrpc_SharedKeyResponse>): grpc.ClientUnaryCall;
  
  MuSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  MuSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  MuSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  MuSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  muSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  muSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  muSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  muSig2Cleanup(argument: _signrpc_MuSig2CleanupRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2CleanupResponse>): grpc.ClientUnaryCall;
  
  MuSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  MuSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  MuSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  MuSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  muSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  muSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  muSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  muSig2CombineKeys(argument: _signrpc_MuSig2CombineKeysRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2CombineKeysResponse>): grpc.ClientUnaryCall;
  
  MuSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  MuSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  MuSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  MuSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  muSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  muSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  muSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  muSig2CombineSig(argument: _signrpc_MuSig2CombineSigRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2CombineSigResponse>): grpc.ClientUnaryCall;
  
  MuSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  MuSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  MuSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  MuSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  muSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  muSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  muSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  muSig2CreateSession(argument: _signrpc_MuSig2SessionRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2SessionResponse>): grpc.ClientUnaryCall;
  
  MuSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  MuSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  MuSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  MuSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  muSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  muSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  muSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  muSig2RegisterNonces(argument: _signrpc_MuSig2RegisterNoncesRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2RegisterNoncesResponse>): grpc.ClientUnaryCall;
  
  MuSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  MuSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  MuSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  MuSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  muSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  muSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  muSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  muSig2Sign(argument: _signrpc_MuSig2SignRequestPartial, callback: grpc.requestCallback<_signrpc_MuSig2SignResponse>): grpc.ClientUnaryCall;
  
  SignMessage(argument: _signrpc_SignMessageReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  SignMessage(argument: _signrpc_SignMessageReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  SignMessage(argument: _signrpc_SignMessageReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  SignMessage(argument: _signrpc_SignMessageReqPartial, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  signMessage(argument: _signrpc_SignMessageReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  signMessage(argument: _signrpc_SignMessageReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  signMessage(argument: _signrpc_SignMessageReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  signMessage(argument: _signrpc_SignMessageReqPartial, callback: grpc.requestCallback<_signrpc_SignMessageResp>): grpc.ClientUnaryCall;
  
  SignOutputRaw(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  SignOutputRaw(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  SignOutputRaw(argument: _signrpc_SignReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  SignOutputRaw(argument: _signrpc_SignReqPartial, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  signOutputRaw(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  signOutputRaw(argument: _signrpc_SignReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  signOutputRaw(argument: _signrpc_SignReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  signOutputRaw(argument: _signrpc_SignReqPartial, callback: grpc.requestCallback<_signrpc_SignResp>): grpc.ClientUnaryCall;
  
  VerifyMessage(argument: _signrpc_VerifyMessageReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  VerifyMessage(argument: _signrpc_VerifyMessageReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  VerifyMessage(argument: _signrpc_VerifyMessageReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  VerifyMessage(argument: _signrpc_VerifyMessageReqPartial, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  verifyMessage(argument: _signrpc_VerifyMessageReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  verifyMessage(argument: _signrpc_VerifyMessageReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  verifyMessage(argument: _signrpc_VerifyMessageReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  verifyMessage(argument: _signrpc_VerifyMessageReqPartial, callback: grpc.requestCallback<_signrpc_VerifyMessageResp>): grpc.ClientUnaryCall;
  
}

export interface SignerHandlers extends grpc.UntypedServiceImplementation {
  ComputeInputScript: grpc.handleUnaryCall<_signrpc_SignReq, _signrpc_InputScriptRespPartial>;
  
  DeriveSharedKey: grpc.handleUnaryCall<_signrpc_SharedKeyRequest, _signrpc_SharedKeyResponsePartial>;
  
  MuSig2Cleanup: grpc.handleUnaryCall<_signrpc_MuSig2CleanupRequest, _signrpc_MuSig2CleanupResponsePartial>;
  
  MuSig2CombineKeys: grpc.handleUnaryCall<_signrpc_MuSig2CombineKeysRequest, _signrpc_MuSig2CombineKeysResponsePartial>;
  
  MuSig2CombineSig: grpc.handleUnaryCall<_signrpc_MuSig2CombineSigRequest, _signrpc_MuSig2CombineSigResponsePartial>;
  
  MuSig2CreateSession: grpc.handleUnaryCall<_signrpc_MuSig2SessionRequest, _signrpc_MuSig2SessionResponsePartial>;
  
  MuSig2RegisterNonces: grpc.handleUnaryCall<_signrpc_MuSig2RegisterNoncesRequest, _signrpc_MuSig2RegisterNoncesResponsePartial>;
  
  MuSig2Sign: grpc.handleUnaryCall<_signrpc_MuSig2SignRequest, _signrpc_MuSig2SignResponsePartial>;
  
  SignMessage: grpc.handleUnaryCall<_signrpc_SignMessageReq, _signrpc_SignMessageRespPartial>;
  
  SignOutputRaw: grpc.handleUnaryCall<_signrpc_SignReq, _signrpc_SignRespPartial>;
  
  VerifyMessage: grpc.handleUnaryCall<_signrpc_VerifyMessageReq, _signrpc_VerifyMessageRespPartial>;
  
}

export interface SignerDefinition extends grpc.ServiceDefinition {
  ComputeInputScript: MethodDefinition<_signrpc_SignReqPartial, _signrpc_InputScriptRespPartial, _signrpc_SignReq, _signrpc_InputScriptResp>
  DeriveSharedKey: MethodDefinition<_signrpc_SharedKeyRequestPartial, _signrpc_SharedKeyResponsePartial, _signrpc_SharedKeyRequest, _signrpc_SharedKeyResponse>
  MuSig2Cleanup: MethodDefinition<_signrpc_MuSig2CleanupRequestPartial, _signrpc_MuSig2CleanupResponsePartial, _signrpc_MuSig2CleanupRequest, _signrpc_MuSig2CleanupResponse>
  MuSig2CombineKeys: MethodDefinition<_signrpc_MuSig2CombineKeysRequestPartial, _signrpc_MuSig2CombineKeysResponsePartial, _signrpc_MuSig2CombineKeysRequest, _signrpc_MuSig2CombineKeysResponse>
  MuSig2CombineSig: MethodDefinition<_signrpc_MuSig2CombineSigRequestPartial, _signrpc_MuSig2CombineSigResponsePartial, _signrpc_MuSig2CombineSigRequest, _signrpc_MuSig2CombineSigResponse>
  MuSig2CreateSession: MethodDefinition<_signrpc_MuSig2SessionRequestPartial, _signrpc_MuSig2SessionResponsePartial, _signrpc_MuSig2SessionRequest, _signrpc_MuSig2SessionResponse>
  MuSig2RegisterNonces: MethodDefinition<_signrpc_MuSig2RegisterNoncesRequestPartial, _signrpc_MuSig2RegisterNoncesResponsePartial, _signrpc_MuSig2RegisterNoncesRequest, _signrpc_MuSig2RegisterNoncesResponse>
  MuSig2Sign: MethodDefinition<_signrpc_MuSig2SignRequestPartial, _signrpc_MuSig2SignResponsePartial, _signrpc_MuSig2SignRequest, _signrpc_MuSig2SignResponse>
  SignMessage: MethodDefinition<_signrpc_SignMessageReqPartial, _signrpc_SignMessageRespPartial, _signrpc_SignMessageReq, _signrpc_SignMessageResp>
  SignOutputRaw: MethodDefinition<_signrpc_SignReqPartial, _signrpc_SignRespPartial, _signrpc_SignReq, _signrpc_SignResp>
  VerifyMessage: MethodDefinition<_signrpc_VerifyMessageReqPartial, _signrpc_VerifyMessageRespPartial, _signrpc_VerifyMessageReq, _signrpc_VerifyMessageResp>
}
