// Original file: src\cc\arduino\cli\commands\v1\compile.proto

import type { Instance as _cc_arduino_cli_commands_v1_Instance, Instance__Output as _cc_arduino_cli_commands_v1_Instance__Output } from '../../../../../cc/arduino/cli/commands/v1/Instance';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../../google/protobuf/BoolValue';

export interface CompileRequest {
  'instance'?: (_cc_arduino_cli_commands_v1_Instance | null);
  'fqbn'?: (string);
  'sketchPath'?: (string);
  'showProperties'?: (boolean);
  'preprocess'?: (boolean);
  'buildCachePath'?: (string);
  'buildPath'?: (string);
  'buildProperties'?: (string)[];
  'warnings'?: (string);
  'verbose'?: (boolean);
  'quiet'?: (boolean);
  'vidPid'?: (string);
  'jobs'?: (number);
  'libraries'?: (string)[];
  'optimizeForDebug'?: (boolean);
  'exportDir'?: (string);
  'clean'?: (boolean);
  'createCompilationDatabaseOnly'?: (boolean);
  'sourceOverride'?: ({[key: string]: string});
  'exportBinaries'?: (_google_protobuf_BoolValue | null);
  'library'?: (string)[];
}

export interface CompileRequest__Output {
  'instance': (_cc_arduino_cli_commands_v1_Instance__Output | null);
  'fqbn': (string);
  'sketchPath': (string);
  'showProperties': (boolean);
  'preprocess': (boolean);
  'buildCachePath': (string);
  'buildPath': (string);
  'buildProperties': (string)[];
  'warnings': (string);
  'verbose': (boolean);
  'quiet': (boolean);
  'vidPid': (string);
  'jobs': (number);
  'libraries': (string)[];
  'optimizeForDebug': (boolean);
  'exportDir': (string);
  'clean': (boolean);
  'createCompilationDatabaseOnly': (boolean);
  'sourceOverride': ({[key: string]: string});
  'exportBinaries': (_google_protobuf_BoolValue__Output | null);
  'library': (string)[];
}
