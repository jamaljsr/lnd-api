// Original file: protos/walletrpc/walletkit.proto

export const ChangeAddressType = {
  CHANGE_ADDRESS_TYPE_UNSPECIFIED: 'CHANGE_ADDRESS_TYPE_UNSPECIFIED',
  CHANGE_ADDRESS_TYPE_P2TR: 'CHANGE_ADDRESS_TYPE_P2TR',
} as const;

export type ChangeAddressTypePartial =
  | 'CHANGE_ADDRESS_TYPE_UNSPECIFIED'
  | 0
  | 'CHANGE_ADDRESS_TYPE_P2TR'
  | 1

export type ChangeAddressType = typeof ChangeAddressType[keyof typeof ChangeAddressType]
