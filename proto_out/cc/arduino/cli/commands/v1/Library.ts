// Original file: src\cc\arduino\cli\commands\v1\lib.proto

import type { LibraryLocation as _cc_arduino_cli_commands_v1_LibraryLocation } from '../../../../../cc/arduino/cli/commands/v1/LibraryLocation';
import type { LibraryLayout as _cc_arduino_cli_commands_v1_LibraryLayout } from '../../../../../cc/arduino/cli/commands/v1/LibraryLayout';

export interface Library {
  'name'?: (string);
  'author'?: (string);
  'maintainer'?: (string);
  'sentence'?: (string);
  'paragraph'?: (string);
  'website'?: (string);
  'category'?: (string);
  'architectures'?: (string)[];
  'types'?: (string)[];
  'installDir'?: (string);
  'sourceDir'?: (string);
  'utilityDir'?: (string);
  'containerPlatform'?: (string);
  'realName'?: (string);
  'dotALinkage'?: (boolean);
  'precompiled'?: (boolean);
  'ldFlags'?: (string);
  'isLegacy'?: (boolean);
  'version'?: (string);
  'license'?: (string);
  'properties'?: ({[key: string]: string});
  'location'?: (_cc_arduino_cli_commands_v1_LibraryLocation | keyof typeof _cc_arduino_cli_commands_v1_LibraryLocation);
  'layout'?: (_cc_arduino_cli_commands_v1_LibraryLayout | keyof typeof _cc_arduino_cli_commands_v1_LibraryLayout);
  'examples'?: (string)[];
  'providesIncludes'?: (string)[];
  'compatibleWith'?: ({[key: string]: boolean});
}

export interface Library__Output {
  'name': (string);
  'author': (string);
  'maintainer': (string);
  'sentence': (string);
  'paragraph': (string);
  'website': (string);
  'category': (string);
  'architectures': (string)[];
  'types': (string)[];
  'installDir': (string);
  'sourceDir': (string);
  'utilityDir': (string);
  'containerPlatform': (string);
  'realName': (string);
  'dotALinkage': (boolean);
  'precompiled': (boolean);
  'ldFlags': (string);
  'isLegacy': (boolean);
  'version': (string);
  'license': (string);
  'properties': ({[key: string]: string});
  'location': (keyof typeof _cc_arduino_cli_commands_v1_LibraryLocation);
  'layout': (keyof typeof _cc_arduino_cli_commands_v1_LibraryLayout);
  'examples': (string)[];
  'providesIncludes': (string)[];
  'compatibleWith': ({[key: string]: boolean});
}
