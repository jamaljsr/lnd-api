// Original file: protos/walletrpc/walletkit.proto


export interface ListUnspentRequestPartial {
  'minConfs'?: (number);
  'maxConfs'?: (number);
  'account'?: (string);
  'unconfirmedOnly'?: (boolean);
}

export interface ListUnspentRequest {
  'minConfs': (number);
  'maxConfs': (number);
  'account': (string);
  'unconfirmedOnly': (boolean);
}
