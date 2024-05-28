// Original file: protos/wtclientrpc/wtclient.proto


export interface PolicyResponsePartial {
  'maxUpdates'?: (number);
  'sweepSatPerByte'?: (number);
  'sweepSatPerVbyte'?: (number);
}

export interface PolicyResponse {
  'maxUpdates': (number);
  'sweepSatPerByte': (number);
  'sweepSatPerVbyte': (number);
}
