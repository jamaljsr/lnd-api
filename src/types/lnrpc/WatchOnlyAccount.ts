// Original file: protos/walletunlocker.proto


export interface WatchOnlyAccountPartial {
  'purpose'?: (number);
  'coinType'?: (number);
  'account'?: (number);
  'xpub'?: (string);
}

export interface WatchOnlyAccount {
  'purpose': (number);
  'coinType': (number);
  'account': (number);
  'xpub': (string);
}
