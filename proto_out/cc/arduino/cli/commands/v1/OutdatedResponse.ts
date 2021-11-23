// Original file: src/cc/arduino/cli/commands/v1/commands.proto

import type { InstalledLibrary as _cc_arduino_cli_commands_v1_InstalledLibrary, InstalledLibrary__Output as _cc_arduino_cli_commands_v1_InstalledLibrary__Output } from '../../../../../cc/arduino/cli/commands/v1/InstalledLibrary';
import type { Platform as _cc_arduino_cli_commands_v1_Platform, Platform__Output as _cc_arduino_cli_commands_v1_Platform__Output } from '../../../../../cc/arduino/cli/commands/v1/Platform';

export interface OutdatedResponse {
  'outdatedLibraries'?: (_cc_arduino_cli_commands_v1_InstalledLibrary)[];
  'outdatedPlatforms'?: (_cc_arduino_cli_commands_v1_Platform)[];
}

export interface OutdatedResponse__Output {
  'outdatedLibraries': (_cc_arduino_cli_commands_v1_InstalledLibrary__Output)[];
  'outdatedPlatforms': (_cc_arduino_cli_commands_v1_Platform__Output)[];
}
