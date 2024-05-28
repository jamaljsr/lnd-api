// Original file: protos/walletrpc/walletkit.proto


export interface KeyReqPartial {
  'keyFingerPrint'?: (number);
  'keyFamily'?: (number);
}

export interface KeyReq {
  'keyFingerPrint': (number);
  'keyFamily': (number);
}
