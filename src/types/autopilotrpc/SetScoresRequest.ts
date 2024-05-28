// Original file: protos/autopilotrpc/autopilot.proto


export interface SetScoresRequestPartial {
  'heuristic'?: (string);
  'scores'?: ({[key: string]: number | string});
}

export interface SetScoresRequest {
  'heuristic': (string);
  'scores': ({[key: string]: number});
}
