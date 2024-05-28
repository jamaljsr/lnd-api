// Original file: protos/wtclientrpc/wtclient.proto


export interface TowerSessionPartial {
  'numBackups'?: (number);
  'numPendingBackups'?: (number);
  'maxBackups'?: (number);
  'sweepSatPerByte'?: (number);
  'sweepSatPerVbyte'?: (number);
  'id'?: (Buffer | Uint8Array | string);
}

export interface TowerSession {
  'numBackups': (number);
  'numPendingBackups': (number);
  'maxBackups': (number);
  'sweepSatPerByte': (number);
  'sweepSatPerVbyte': (number);
  'id': (Buffer);
}
