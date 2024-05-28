// Original file: protos/signrpc/signer.proto


export interface SignRespPartial {
  'rawSigs'?: (Buffer | Uint8Array | string)[];
}

export interface SignResp {
  'rawSigs': (Buffer)[];
}
