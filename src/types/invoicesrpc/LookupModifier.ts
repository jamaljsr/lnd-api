// Original file: protos/invoicesrpc/invoices.proto

export const LookupModifier = {
  DEFAULT: 'DEFAULT',
  HTLC_SET_ONLY: 'HTLC_SET_ONLY',
  HTLC_SET_BLANK: 'HTLC_SET_BLANK',
} as const;

export type LookupModifierPartial =
  | 'DEFAULT'
  | 0
  | 'HTLC_SET_ONLY'
  | 1
  | 'HTLC_SET_BLANK'
  | 2

export type LookupModifier = typeof LookupModifier[keyof typeof LookupModifier]
