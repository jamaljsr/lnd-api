// Original file: protos/signrpc/signer.proto


export interface TaprootTweakDescPartial {
  'scriptRoot'?: (Buffer | Uint8Array | string);
  'keySpendOnly'?: (boolean);
}

export interface TaprootTweakDesc {
  'scriptRoot': (Buffer);
  'keySpendOnly': (boolean);
}
