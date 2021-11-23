// Original file: src/cc/arduino/cli/commands/v1/commands.proto

import type { DownloadProgress as _cc_arduino_cli_commands_v1_DownloadProgress, DownloadProgress__Output as _cc_arduino_cli_commands_v1_DownloadProgress__Output } from '../../../../../cc/arduino/cli/commands/v1/DownloadProgress';
import type { TaskProgress as _cc_arduino_cli_commands_v1_TaskProgress, TaskProgress__Output as _cc_arduino_cli_commands_v1_TaskProgress__Output } from '../../../../../cc/arduino/cli/commands/v1/TaskProgress';

export interface UpgradeResponse {
  'progress'?: (_cc_arduino_cli_commands_v1_DownloadProgress | null);
  'taskProgress'?: (_cc_arduino_cli_commands_v1_TaskProgress | null);
}

export interface UpgradeResponse__Output {
  'progress': (_cc_arduino_cli_commands_v1_DownloadProgress__Output | null);
  'taskProgress': (_cc_arduino_cli_commands_v1_TaskProgress__Output | null);
}
