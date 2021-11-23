// Original file: src\cc\arduino\cli\commands\v1\compile.proto

import type { Library as _cc_arduino_cli_commands_v1_Library, Library__Output as _cc_arduino_cli_commands_v1_Library__Output } from '../../../../../cc/arduino/cli/commands/v1/Library';
import type { ExecutableSectionSize as _cc_arduino_cli_commands_v1_ExecutableSectionSize, ExecutableSectionSize__Output as _cc_arduino_cli_commands_v1_ExecutableSectionSize__Output } from '../../../../../cc/arduino/cli/commands/v1/ExecutableSectionSize';

export interface CompileResponse {
  'outStream'?: (Buffer | Uint8Array | string);
  'errStream'?: (Buffer | Uint8Array | string);
  'buildPath'?: (string);
  'usedLibraries'?: (_cc_arduino_cli_commands_v1_Library)[];
  'executableSectionsSize'?: (_cc_arduino_cli_commands_v1_ExecutableSectionSize)[];
}

export interface CompileResponse__Output {
  'outStream': (Buffer);
  'errStream': (Buffer);
  'buildPath': (string);
  'usedLibraries': (_cc_arduino_cli_commands_v1_Library__Output)[];
  'executableSectionsSize': (_cc_arduino_cli_commands_v1_ExecutableSectionSize__Output)[];
}
