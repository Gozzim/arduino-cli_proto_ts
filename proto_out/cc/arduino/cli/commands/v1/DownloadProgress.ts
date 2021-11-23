// Original file: src\cc\arduino\cli\commands\v1\common.proto

import type { Long } from '@grpc/proto-loader';

export interface DownloadProgress {
  'url'?: (string);
  'file'?: (string);
  'totalSize'?: (number | string | Long);
  'downloaded'?: (number | string | Long);
  'completed'?: (boolean);
}

export interface DownloadProgress__Output {
  'url': (string);
  'file': (string);
  'totalSize': (string);
  'downloaded': (string);
  'completed': (boolean);
}
