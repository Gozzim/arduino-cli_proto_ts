// Original file: src/cc/arduino/cli/debug/v1/debug.proto


export interface GetDebugConfigResponse {
  'executable'?: (string);
  'toolchain'?: (string);
  'toolchainPath'?: (string);
  'toolchainPrefix'?: (string);
  'server'?: (string);
  'serverPath'?: (string);
  'toolchainConfiguration'?: ({[key: string]: string});
  'serverConfiguration'?: ({[key: string]: string});
}

export interface GetDebugConfigResponse__Output {
  'executable': (string);
  'toolchain': (string);
  'toolchainPath': (string);
  'toolchainPrefix': (string);
  'server': (string);
  'serverPath': (string);
  'toolchainConfiguration': ({[key: string]: string});
  'serverConfiguration': ({[key: string]: string});
}
