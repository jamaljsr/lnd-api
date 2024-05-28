// Original file: protos/signrpc/signer.proto

import type { SignDescriptorPartial as _signrpc_SignDescriptorPartial, SignDescriptor as _signrpc_SignDescriptor } from '../signrpc/SignDescriptor';
import type { TxOutPartial as _signrpc_TxOutPartial, TxOut as _signrpc_TxOut } from '../signrpc/TxOut';

export interface SignReqPartial {
  'rawTxBytes'?: (Buffer | Uint8Array | string);
  'signDescs'?: (_signrpc_SignDescriptorPartial)[];
  'prevOutputs'?: (_signrpc_TxOutPartial)[];
}

export interface SignReq {
  'rawTxBytes': (Buffer);
  'signDescs': (_signrpc_SignDescriptor)[];
  'prevOutputs': (_signrpc_TxOut)[];
}
