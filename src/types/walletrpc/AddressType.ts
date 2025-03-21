// Original file: protos/walletrpc/walletkit.proto

export const AddressType = {
  UNKNOWN: 'UNKNOWN',
  WITNESS_PUBKEY_HASH: 'WITNESS_PUBKEY_HASH',
  NESTED_WITNESS_PUBKEY_HASH: 'NESTED_WITNESS_PUBKEY_HASH',
  HYBRID_NESTED_WITNESS_PUBKEY_HASH: 'HYBRID_NESTED_WITNESS_PUBKEY_HASH',
  TAPROOT_PUBKEY: 'TAPROOT_PUBKEY',
} as const;

export type AddressTypePartial =
  | 'UNKNOWN'
  | 0
  | 'WITNESS_PUBKEY_HASH'
  | 1
  | 'NESTED_WITNESS_PUBKEY_HASH'
  | 2
  | 'HYBRID_NESTED_WITNESS_PUBKEY_HASH'
  | 3
  | 'TAPROOT_PUBKEY'
  | 4

export type AddressType = typeof AddressType[keyof typeof AddressType]
