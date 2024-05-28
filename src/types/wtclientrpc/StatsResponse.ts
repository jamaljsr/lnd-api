// Original file: protos/wtclientrpc/wtclient.proto


export interface StatsResponsePartial {
  'numBackups'?: (number);
  'numPendingBackups'?: (number);
  'numFailedBackups'?: (number);
  'numSessionsAcquired'?: (number);
  'numSessionsExhausted'?: (number);
}

export interface StatsResponse {
  'numBackups': (number);
  'numPendingBackups': (number);
  'numFailedBackups': (number);
  'numSessionsAcquired': (number);
  'numSessionsExhausted': (number);
}
