// Original file: src/cc/arduino/cli/commands/v1/commands.proto


export interface LoadSketchResponse {
  'mainFile'?: (string);
  'locationPath'?: (string);
  'otherSketchFiles'?: (string)[];
  'additionalFiles'?: (string)[];
  'rootFolderFiles'?: (string)[];
}

export interface LoadSketchResponse__Output {
  'mainFile': (string);
  'locationPath': (string);
  'otherSketchFiles': (string)[];
  'additionalFiles': (string)[];
  'rootFolderFiles': (string)[];
}
