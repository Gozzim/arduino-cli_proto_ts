// Original file: src\cc\arduino\cli\commands\v1\upload.proto

import type { Instance as _cc_arduino_cli_commands_v1_Instance, Instance__Output as _cc_arduino_cli_commands_v1_Instance__Output } from '../../../../../cc/arduino/cli/commands/v1/Instance';
import type { Port as _cc_arduino_cli_commands_v1_Port, Port__Output as _cc_arduino_cli_commands_v1_Port__Output } from '../../../../../cc/arduino/cli/commands/v1/Port';

export interface UploadUsingProgrammerRequest {
  'instance'?: (_cc_arduino_cli_commands_v1_Instance | null);
  'fqbn'?: (string);
  'sketchPath'?: (string);
  'port'?: (_cc_arduino_cli_commands_v1_Port | null);
  'verbose'?: (boolean);
  'verify'?: (boolean);
  'importFile'?: (string);
  'importDir'?: (string);
  'programmer'?: (string);
  'dryRun'?: (boolean);
  'userFields'?: ({[key: string]: string});
}

export interface UploadUsingProgrammerRequest__Output {
  'instance': (_cc_arduino_cli_commands_v1_Instance__Output | null);
  'fqbn': (string);
  'sketchPath': (string);
  'port': (_cc_arduino_cli_commands_v1_Port__Output | null);
  'verbose': (boolean);
  'verify': (boolean);
  'importFile': (string);
  'importDir': (string);
  'programmer': (string);
  'dryRun': (boolean);
  'userFields': ({[key: string]: string});
}
