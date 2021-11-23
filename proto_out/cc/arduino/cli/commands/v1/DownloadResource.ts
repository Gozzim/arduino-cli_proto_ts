// Original file: src\cc\arduino\cli\commands\v1\lib.proto

import type { Long } from '@grpc/proto-loader';

export interface DownloadResource {
  'url'?: (string);
  'archiveFilename'?: (string);
  'checksum'?: (string);
  'size'?: (number | string | Long);
  'cachePath'?: (string);
}

export interface DownloadResource__Output {
  'url': (string);
  'archiveFilename': (string);
  'checksum': (string);
  'size': (string);
  'cachePath': (string);
}
