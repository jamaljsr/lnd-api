// Original file: protos/stateservice.proto

export const WalletState = {
  NON_EXISTING: 'NON_EXISTING',
  LOCKED: 'LOCKED',
  UNLOCKED: 'UNLOCKED',
  RPC_ACTIVE: 'RPC_ACTIVE',
  SERVER_ACTIVE: 'SERVER_ACTIVE',
  WAITING_TO_START: 'WAITING_TO_START',
} as const;

export type WalletStatePartial =
  | 'NON_EXISTING'
  | 0
  | 'LOCKED'
  | 1
  | 'UNLOCKED'
  | 2
  | 'RPC_ACTIVE'
  | 3
  | 'SERVER_ACTIVE'
  | 4
  | 'WAITING_TO_START'
  | 255

export type WalletState = typeof WalletState[keyof typeof WalletState]
