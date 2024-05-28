// Original file: protos/signrpc/signer.proto

import type { KeyLocatorPartial as _signrpc_KeyLocatorPartial, KeyLocator as _signrpc_KeyLocator } from '../signrpc/KeyLocator';
import type { KeyDescriptorPartial as _signrpc_KeyDescriptorPartial, KeyDescriptor as _signrpc_KeyDescriptor } from '../signrpc/KeyDescriptor';

export interface SharedKeyRequestPartial {
  'ephemeralPubkey'?: (Buffer | Uint8Array | string);
  'keyLoc'?: (_signrpc_KeyLocatorPartial | null);
  'keyDesc'?: (_signrpc_KeyDescriptorPartial | null);
}

export interface SharedKeyRequest {
  'ephemeralPubkey': (Buffer);
  'keyLoc': (_signrpc_KeyLocator | null);
  'keyDesc': (_signrpc_KeyDescriptor | null);
}
