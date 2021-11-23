// Original file: src/cc/arduino/cli/monitor/v1/monitor.proto

import type { MonitorConfig as _cc_arduino_cli_monitor_v1_MonitorConfig, MonitorConfig__Output as _cc_arduino_cli_monitor_v1_MonitorConfig__Output } from '../../../../../cc/arduino/cli/monitor/v1/MonitorConfig';

export interface StreamingOpenRequest {
  'config'?: (_cc_arduino_cli_monitor_v1_MonitorConfig | null);
  'data'?: (Buffer | Uint8Array | string);
  'recvAcknowledge'?: (number);
  'content'?: "config"|"data"|"recvAcknowledge";
}

export interface StreamingOpenRequest__Output {
  'config'?: (_cc_arduino_cli_monitor_v1_MonitorConfig__Output | null);
  'data'?: (Buffer);
  'recvAcknowledge'?: (number);
  'content': "config"|"data"|"recvAcknowledge";
}
