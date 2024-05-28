// Original file: protos/peersrpc/peers.proto

export const UpdateAction = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
} as const;

export type UpdateActionPartial =
  | 'ADD'
  | 0
  | 'REMOVE'
  | 1

export type UpdateAction = typeof UpdateAction[keyof typeof UpdateAction]
