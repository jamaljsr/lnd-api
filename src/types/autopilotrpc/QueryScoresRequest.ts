// Original file: protos/autopilotrpc/autopilot.proto


export interface QueryScoresRequestPartial {
  'pubkeys'?: (string)[];
  'ignoreLocalState'?: (boolean);
}

export interface QueryScoresRequest {
  'pubkeys': (string)[];
  'ignoreLocalState': (boolean);
}
