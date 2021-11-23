// Original file: src\cc\arduino\cli\commands\v1\board.proto

import type { DetectedPort as _cc_arduino_cli_commands_v1_DetectedPort, DetectedPort__Output as _cc_arduino_cli_commands_v1_DetectedPort__Output } from '../../../../../cc/arduino/cli/commands/v1/DetectedPort';

export interface BoardListWatchResponse {
  'eventType'?: (string);
  'port'?: (_cc_arduino_cli_commands_v1_DetectedPort | null);
  'error'?: (string);
}

export interface BoardListWatchResponse__Output {
  'eventType': (string);
  'port': (_cc_arduino_cli_commands_v1_DetectedPort__Output | null);
  'error': (string);
}
