// Original file: protos/signrpc/signer.proto

import type { KeyLocatorPartial as _signrpc_KeyLocatorPartial, KeyLocator as _signrpc_KeyLocator } from '../signrpc/KeyLocator';

export interface KeyDescriptorPartial {
  'rawKeyBytes'?: (Buffer | Uint8Array | string);
  'keyLoc'?: (_signrpc_KeyLocatorPartial | null);
}

export interface KeyDescriptor {
  'rawKeyBytes': (Buffer);
  'keyLoc': (_signrpc_KeyLocator | null);
}
