// Original file: src\cc\arduino\cli\commands\v1\upload.proto


export interface UploadResponse {
  'outStream'?: (Buffer | Uint8Array | string);
  'errStream'?: (Buffer | Uint8Array | string);
}

export interface UploadResponse__Output {
  'outStream': (Buffer);
  'errStream': (Buffer);
}
