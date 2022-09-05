import Table, { EMPTY_SYMBOL, DEFAULT_TABLE } from './types/table';
import Tape, { DEFAULT_TAPE } from './types/tape';

import save from './functions/save';
import exportTable from './functions/exporttable';
import importTable from './functions/importtable';
import parseTable from './functions/parsetable';

import convertToSubscript from './functions/converttosubscript';

import resources from './config/resources';
import subscripts from './config/subscripts';

// global namespace
declare global {
    var turing: any;
}

export default function initialize() {
    globalThis.turing = {
        table: null as Table | null,
        tape: null as Tape | null,

        utils: {
            save,
            exportTable,
            importTable,
            parseTable,

            convertToSubscript
        },

        resources,

        config: {
            EMPTY_SYMBOL,
            DEFAULT_TABLE,
            DEFAULT_TAPE,
            DOUBLE_CLICK_INTERVAL: 300,

            subscripts
        }
    };
}
