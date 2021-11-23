// Original file: src\cc\arduino\cli\commands\v1\board.proto

import type { Long } from '@grpc/proto-loader';

export interface Systems {
  'checksum'?: (string);
  'host'?: (string);
  'archiveFilename'?: (string);
  'url'?: (string);
  'size'?: (number | string | Long);
}

export interface Systems__Output {
  'checksum': (string);
  'host': (string);
  'archiveFilename': (string);
  'url': (string);
  'size': (string);
}
