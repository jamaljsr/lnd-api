// Original file: protos/neutrinorpc/neutrino.proto

import type { Long } from '@grpc/proto-loader';

export interface GetBlockResponsePartial {
  'hash'?: (string);
  'confirmations'?: (number | string | Long);
  'strippedSize'?: (number | string | Long);
  'size'?: (number | string | Long);
  'weight'?: (number | string | Long);
  'height'?: (number);
  'version'?: (number);
  'versionHex'?: (string);
  'merkleroot'?: (string);
  'tx'?: (string)[];
  'time'?: (number | string | Long);
  'nonce'?: (number);
  'bits'?: (string);
  'ntx'?: (number);
  'previousBlockHash'?: (string);
  'rawHex'?: (Buffer | Uint8Array | string);
}

export interface GetBlockResponse {
  'hash': (string);
  'confirmations': (string);
  'strippedSize': (string);
  'size': (string);
  'weight': (string);
  'height': (number);
  'version': (number);
  'versionHex': (string);
  'merkleroot': (string);
  'tx': (string)[];
  'time': (string);
  'nonce': (number);
  'bits': (string);
  'ntx': (number);
  'previousBlockHash': (string);
  'rawHex': (Buffer);
}
