/* global PouchDB */

// this code only runs in the browser, as its own dist/ script

import RelationalPlugin from './index';

//using guardedConsole inserts many unwanted things
import { guardedConsole } from 'pouchdb-utils';

if (typeof PouchDB === 'undefined') {
  guardedConsole('error', 'pouchdb-find plugin error: ' +
    'Cannot find global "PouchDB" object! ' +
    'Did you remember to include pouchdb.js?');
} else {
  PouchDB.plugin(RelationalPlugin);
}
