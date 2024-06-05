// Original file: protos/routerrpc/router.proto

import type { AliasMapPartial as _lnrpc_AliasMapPartial, AliasMap as _lnrpc_AliasMap } from '../lnrpc/AliasMap';

export interface AddAliasesRequestPartial {
  'aliasMaps'?: (_lnrpc_AliasMapPartial)[];
}

export interface AddAliasesRequest {
  'aliasMaps': (_lnrpc_AliasMap)[];
}
