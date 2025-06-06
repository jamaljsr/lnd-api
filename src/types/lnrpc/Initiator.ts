// Original file: protos/lightning.proto

export const Initiator = {
  INITIATOR_UNKNOWN: 'INITIATOR_UNKNOWN',
  INITIATOR_LOCAL: 'INITIATOR_LOCAL',
  INITIATOR_REMOTE: 'INITIATOR_REMOTE',
  INITIATOR_BOTH: 'INITIATOR_BOTH',
} as const;

export type InitiatorPartial =
  | 'INITIATOR_UNKNOWN'
  | 0
  | 'INITIATOR_LOCAL'
  | 1
  | 'INITIATOR_REMOTE'
  | 2
  | 'INITIATOR_BOTH'
  | 3

export type Initiator = typeof Initiator[keyof typeof Initiator]
