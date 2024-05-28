// Original file: protos/signrpc/signer.proto

import type { InputScriptPartial as _signrpc_InputScriptPartial, InputScript as _signrpc_InputScript } from '../signrpc/InputScript';

export interface InputScriptRespPartial {
  'inputScripts'?: (_signrpc_InputScriptPartial)[];
}

export interface InputScriptResp {
  'inputScripts': (_signrpc_InputScript)[];
}
