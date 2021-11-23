// Original file: src/cc/arduino/cli/debug/v1/debug.proto

import type { DebugConfigRequest as _cc_arduino_cli_debug_v1_DebugConfigRequest, DebugConfigRequest__Output as _cc_arduino_cli_debug_v1_DebugConfigRequest__Output } from '../../../../../cc/arduino/cli/debug/v1/DebugConfigRequest';

export interface DebugRequest {
  'debugRequest'?: (_cc_arduino_cli_debug_v1_DebugConfigRequest | null);
  'data'?: (Buffer | Uint8Array | string);
  'sendInterrupt'?: (boolean);
}

export interface DebugRequest__Output {
  'debugRequest': (_cc_arduino_cli_debug_v1_DebugConfigRequest__Output | null);
  'data': (Buffer);
  'sendInterrupt': (boolean);
}
