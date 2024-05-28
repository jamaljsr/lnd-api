// Original file: protos/walletrpc/walletkit.proto


export interface PsbtCoinSelectPartial {
  'psbt'?: (Buffer | Uint8Array | string);
  'existingOutputIndex'?: (number);
  'add'?: (boolean);
  'changeOutput'?: "existingOutputIndex"|"add";
}

export interface PsbtCoinSelect {
  'psbt': (Buffer);
  'existingOutputIndex'?: (number);
  'add'?: (boolean);
  'changeOutput': "existingOutputIndex"|"add";
}
