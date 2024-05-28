// Original file: protos/walletrpc/walletkit.proto


export interface SendOutputsResponsePartial {
  'rawTx'?: (Buffer | Uint8Array | string);
}

export interface SendOutputsResponse {
  'rawTx': (Buffer);
}
