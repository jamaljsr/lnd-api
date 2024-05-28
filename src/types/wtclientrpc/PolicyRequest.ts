// Original file: protos/wtclientrpc/wtclient.proto

import type { PolicyTypePartial as _wtclientrpc_PolicyTypePartial, PolicyType as _wtclientrpc_PolicyType } from '../wtclientrpc/PolicyType';

export interface PolicyRequestPartial {
  'policyType'?: (_wtclientrpc_PolicyTypePartial);
}

export interface PolicyRequest {
  'policyType': (_wtclientrpc_PolicyType);
}
