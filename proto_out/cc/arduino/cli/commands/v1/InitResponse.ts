// Original file: src/cc/arduino/cli/commands/v1/commands.proto

import type { Status as _google_rpc_Status, Status__Output as _google_rpc_Status__Output } from '../../../../../google/rpc/Status';
import type { DownloadProgress as _cc_arduino_cli_commands_v1_DownloadProgress, DownloadProgress__Output as _cc_arduino_cli_commands_v1_DownloadProgress__Output } from '../../../../../cc/arduino/cli/commands/v1/DownloadProgress';
import type { TaskProgress as _cc_arduino_cli_commands_v1_TaskProgress, TaskProgress__Output as _cc_arduino_cli_commands_v1_TaskProgress__Output } from '../../../../../cc/arduino/cli/commands/v1/TaskProgress';

export interface _cc_arduino_cli_commands_v1_InitResponse_Progress {
  'downloadProgress'?: (_cc_arduino_cli_commands_v1_DownloadProgress | null);
  'taskProgress'?: (_cc_arduino_cli_commands_v1_TaskProgress | null);
}

export interface _cc_arduino_cli_commands_v1_InitResponse_Progress__Output {
  'downloadProgress': (_cc_arduino_cli_commands_v1_DownloadProgress__Output | null);
  'taskProgress': (_cc_arduino_cli_commands_v1_TaskProgress__Output | null);
}

export interface InitResponse {
  'initProgress'?: (_cc_arduino_cli_commands_v1_InitResponse_Progress | null);
  'error'?: (_google_rpc_Status | null);
  'message'?: "initProgress"|"error";
}

export interface InitResponse__Output {
  'initProgress'?: (_cc_arduino_cli_commands_v1_InitResponse_Progress__Output | null);
  'error'?: (_google_rpc_Status__Output | null);
  'message': "initProgress"|"error";
}
