// Original file: src\cc\arduino\cli\commands\v1\core.proto

import type { Instance as _cc_arduino_cli_commands_v1_Instance, Instance__Output as _cc_arduino_cli_commands_v1_Instance__Output } from '../../../../../cc/arduino/cli/commands/v1/Instance';

export interface PlatformUpgradeRequest {
  'instance'?: (_cc_arduino_cli_commands_v1_Instance | null);
  'platformPackage'?: (string);
  'architecture'?: (string);
  'skipPostInstall'?: (boolean);
}

export interface PlatformUpgradeRequest__Output {
  'instance': (_cc_arduino_cli_commands_v1_Instance__Output | null);
  'platformPackage': (string);
  'architecture': (string);
  'skipPostInstall': (boolean);
}
