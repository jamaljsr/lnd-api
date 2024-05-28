// Original file: protos/wtclientrpc/wtclient.proto


export interface TerminateSessionRequestPartial {
  'sessionId'?: (Buffer | Uint8Array | string);
}

export interface TerminateSessionRequest {
  'sessionId': (Buffer);
}
