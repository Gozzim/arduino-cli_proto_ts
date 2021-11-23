// Original file: src/cc/arduino/cli/commands/v1/commands.proto

import type { Instance as _cc_arduino_cli_commands_v1_Instance, Instance__Output as _cc_arduino_cli_commands_v1_Instance__Output } from '../../../../../cc/arduino/cli/commands/v1/Instance';

export interface NewSketchRequest {
  'instance'?: (_cc_arduino_cli_commands_v1_Instance | null);
  'sketchName'?: (string);
  'sketchDir'?: (string);
}

export interface NewSketchRequest__Output {
  'instance': (_cc_arduino_cli_commands_v1_Instance__Output | null);
  'sketchName': (string);
  'sketchDir': (string);
}