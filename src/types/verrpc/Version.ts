// Original file: protos/verrpc/verrpc.proto


export interface VersionPartial {
  'commit'?: (string);
  'commitHash'?: (string);
  'version'?: (string);
  'appMajor'?: (number);
  'appMinor'?: (number);
  'appPatch'?: (number);
  'appPreRelease'?: (string);
  'buildTags'?: (string)[];
  'goVersion'?: (string);
}

export interface Version {
  'commit': (string);
  'commitHash': (string);
  'version': (string);
  'appMajor': (number);
  'appMinor': (number);
  'appPatch': (number);
  'appPreRelease': (string);
  'buildTags': (string)[];
  'goVersion': (string);
}
