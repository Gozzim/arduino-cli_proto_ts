// Original file: src\cc\arduino\cli\commands\v1\lib.proto

import type { Instance as _cc_arduino_cli_commands_v1_Instance, Instance__Output as _cc_arduino_cli_commands_v1_Instance__Output } from '../../../../../cc/arduino/cli/commands/v1/Instance';

export interface LibraryInstallRequest {
  'instance'?: (_cc_arduino_cli_commands_v1_Instance | null);
  'name'?: (string);
  'version'?: (string);
  'no_deps'?: (boolean);
}

export interface LibraryInstallRequest__Output {
  'instance': (_cc_arduino_cli_commands_v1_Instance__Output | null);
  'name': (string);
  'version': (string);
  'no_deps': (boolean);
}
