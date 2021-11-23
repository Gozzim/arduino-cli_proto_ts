// Original file: src\cc\arduino\cli\commands\v1\monitor.proto

import type { MonitorPortSetting as _cc_arduino_cli_commands_v1_MonitorPortSetting, MonitorPortSetting__Output as _cc_arduino_cli_commands_v1_MonitorPortSetting__Output } from '../../../../../cc/arduino/cli/commands/v1/MonitorPortSetting';

export interface MonitorResponse {
  'error'?: (string);
  'rxData'?: (Buffer | Uint8Array | string);
  'appliedSettings'?: (_cc_arduino_cli_commands_v1_MonitorPortSetting)[];
}

export interface MonitorResponse__Output {
  'error': (string);
  'rxData': (Buffer);
  'appliedSettings': (_cc_arduino_cli_commands_v1_MonitorPortSetting__Output)[];
}
