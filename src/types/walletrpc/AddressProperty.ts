// Original file: protos/walletrpc/walletkit.proto

import type { Long } from '@grpc/proto-loader';

export interface AddressPropertyPartial {
  'address'?: (string);
  'isInternal'?: (boolean);
  'balance'?: (number | string | Long);
  'derivationPath'?: (string);
  'publicKey'?: (Buffer | Uint8Array | string);
}

export interface AddressProperty {
  'address': (string);
  'isInternal': (boolean);
  'balance': (string);
  'derivationPath': (string);
  'publicKey': (Buffer);
}
