/*
  @license
	Rollup.js v2.60.2
	Tue, 30 Nov 2021 05:36:58 GMT - commit 7c9b89fade00a4eb8ea39c6b15ef7d0e6e5739be


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

require('fs');
require('path');
require('url');
const loadConfigFile_js = require('./shared/loadConfigFile.js');
require('./shared/rollup.js');
require('./shared/mergeOptions.js');
require('tty');
require('crypto');
require('events');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map
