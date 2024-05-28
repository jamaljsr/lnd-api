// Original file: protos/signrpc/signer.proto

import type { KeyDescriptorPartial as _signrpc_KeyDescriptorPartial, KeyDescriptor as _signrpc_KeyDescriptor } from '../signrpc/KeyDescriptor';
import type { TxOutPartial as _signrpc_TxOutPartial, TxOut as _signrpc_TxOut } from '../signrpc/TxOut';
import type { SignMethodPartial as _signrpc_SignMethodPartial, SignMethod as _signrpc_SignMethod } from '../signrpc/SignMethod';

export interface SignDescriptorPartial {
  'keyDesc'?: (_signrpc_KeyDescriptorPartial | null);
  'singleTweak'?: (Buffer | Uint8Array | string);
  'doubleTweak'?: (Buffer | Uint8Array | string);
  'witnessScript'?: (Buffer | Uint8Array | string);
  'output'?: (_signrpc_TxOutPartial | null);
  'sighash'?: (number);
  'inputIndex'?: (number);
  'signMethod'?: (_signrpc_SignMethodPartial);
  'tapTweak'?: (Buffer | Uint8Array | string);
}

export interface SignDescriptor {
  'keyDesc': (_signrpc_KeyDescriptor | null);
  'singleTweak': (Buffer);
  'doubleTweak': (Buffer);
  'witnessScript': (Buffer);
  'output': (_signrpc_TxOut | null);
  'sighash': (number);
  'inputIndex': (number);
  'signMethod': (_signrpc_SignMethod);
  'tapTweak': (Buffer);
}
