// Original file: src\cc\arduino\cli\commands\v1\core.proto

import type { Instance as _cc_arduino_cli_commands_v1_Instance, Instance__Output as _cc_arduino_cli_commands_v1_Instance__Output } from '../../../../../cc/arduino/cli/commands/v1/Instance';

export interface PlatformSearchRequest {
  'instance'?: (_cc_arduino_cli_commands_v1_Instance | null);
  'searchArgs'?: (string);
  'allVersions'?: (boolean);
}

export interface PlatformSearchRequest__Output {
  'instance': (_cc_arduino_cli_commands_v1_Instance__Output | null);
  'searchArgs': (string);
  'allVersions': (boolean);
}
