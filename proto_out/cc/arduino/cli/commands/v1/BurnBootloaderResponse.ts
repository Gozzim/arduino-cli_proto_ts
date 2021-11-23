// Original file: src\cc\arduino\cli\commands\v1\upload.proto


export interface BurnBootloaderResponse {
  'outStream'?: (Buffer | Uint8Array | string);
  'errStream'?: (Buffer | Uint8Array | string);
}

export interface BurnBootloaderResponse__Output {
  'outStream': (Buffer);
  'errStream': (Buffer);
}
