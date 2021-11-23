// Original file: src/cc/arduino/cli/commands/v1/commands.proto

import type { Instance as _cc_arduino_cli_commands_v1_Instance, Instance__Output as _cc_arduino_cli_commands_v1_Instance__Output } from '../../../../../cc/arduino/cli/commands/v1/Instance';

export interface UpgradeRequest {
  'instance'?: (_cc_arduino_cli_commands_v1_Instance | null);
  'skipPostInstall'?: (boolean);
}

export interface UpgradeRequest__Output {
  'instance': (_cc_arduino_cli_commands_v1_Instance__Output | null);
  'skipPostInstall': (boolean);
}
