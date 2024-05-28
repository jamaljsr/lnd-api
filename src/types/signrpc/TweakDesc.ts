// Original file: protos/signrpc/signer.proto


export interface TweakDescPartial {
  'tweak'?: (Buffer | Uint8Array | string);
  'isXOnly'?: (boolean);
}

export interface TweakDesc {
  'tweak': (Buffer);
  'isXOnly': (boolean);
}
