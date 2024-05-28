// Original file: protos/autopilotrpc/autopilot.proto


export interface _autopilotrpc_QueryScoresResponse_HeuristicResultPartial {
  'heuristic'?: (string);
  'scores'?: ({[key: string]: number | string});
}

export interface _autopilotrpc_QueryScoresResponse_HeuristicResult {
  'heuristic': (string);
  'scores': ({[key: string]: number});
}

export interface QueryScoresResponsePartial {
  'results'?: (_autopilotrpc_QueryScoresResponse_HeuristicResultPartial)[];
}

export interface QueryScoresResponse {
  'results': (_autopilotrpc_QueryScoresResponse_HeuristicResult)[];
}
