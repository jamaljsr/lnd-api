// Original file: protos/neutrinorpc/neutrino.proto


export interface StatusResponsePartial {
  'active'?: (boolean);
  'synced'?: (boolean);
  'blockHeight'?: (number);
  'blockHash'?: (string);
  'peers'?: (string)[];
}

export interface StatusResponse {
  'active': (boolean);
  'synced': (boolean);
  'blockHeight': (number);
  'blockHash': (string);
  'peers': (string)[];
}
