// Original file: protos/signrpc/signer.proto

import type { KeyLocatorPartial as _signrpc_KeyLocatorPartial, KeyLocator as _signrpc_KeyLocator } from '../signrpc/KeyLocator';

export interface SignMessageReqPartial {
  'msg'?: (Buffer | Uint8Array | string);
  'keyLoc'?: (_signrpc_KeyLocatorPartial | null);
  'doubleHash'?: (boolean);
  'compactSig'?: (boolean);
  'schnorrSig'?: (boolean);
  'schnorrSigTapTweak'?: (Buffer | Uint8Array | string);
  'tag'?: (Buffer | Uint8Array | string);
}

export interface SignMessageReq {
  'msg': (Buffer);
  'keyLoc': (_signrpc_KeyLocator | null);
  'doubleHash': (boolean);
  'compactSig': (boolean);
  'schnorrSig': (boolean);
  'schnorrSigTapTweak': (Buffer);
  'tag': (Buffer);
}
