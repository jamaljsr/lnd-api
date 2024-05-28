// Original file: protos/signrpc/signer.proto

export const MuSig2Version = {
  MUSIG2_VERSION_UNDEFINED: 'MUSIG2_VERSION_UNDEFINED',
  MUSIG2_VERSION_V040: 'MUSIG2_VERSION_V040',
  MUSIG2_VERSION_V100RC2: 'MUSIG2_VERSION_V100RC2',
} as const;

export type MuSig2VersionPartial =
  | 'MUSIG2_VERSION_UNDEFINED'
  | 0
  | 'MUSIG2_VERSION_V040'
  | 1
  | 'MUSIG2_VERSION_V100RC2'
  | 2

export type MuSig2Version = typeof MuSig2Version[keyof typeof MuSig2Version]
