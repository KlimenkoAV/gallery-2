import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import 'node_modules/zone.js/dist/async-test';
import 'node_modules/zone.js/dist/proxy.js';

declare const __karma__: any;
declare const require: any;
__karma__.loader = function() {};

getTestBed().initTestEnvironment(
     BrowserDynamicTestingModule,
     platformBrowserDynamicTesting(),
 );
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
__karma__.start();
