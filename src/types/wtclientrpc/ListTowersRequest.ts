// Original file: protos/wtclientrpc/wtclient.proto


export interface ListTowersRequestPartial {
  'includeSessions'?: (boolean);
  'excludeExhaustedSessions'?: (boolean);
}

export interface ListTowersRequest {
  'includeSessions': (boolean);
  'excludeExhaustedSessions': (boolean);
}
