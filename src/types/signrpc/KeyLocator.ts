// Original file: protos/signrpc/signer.proto


export interface KeyLocatorPartial {
  'keyFamily'?: (number);
  'keyIndex'?: (number);
}

export interface KeyLocator {
  'keyFamily': (number);
  'keyIndex': (number);
}
