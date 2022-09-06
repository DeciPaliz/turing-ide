import Table, { EMPTY_SYMBOL, DEFAULT_TABLE } from './types/table';
import Tape, { DEFAULT_TAPE } from './types/tape';

import save from './functions/save';
import exportTable from './functions/exporttable';
import importTable from './functions/importtable';
import parseTable from './functions/parsetable';

import convertToSubscript from './functions/converttosubscript';

import { addState, removeState } from './functions/table/buttons';

import { setValue, setStart } from './functions/tape/editor';

import resources from './config/resources';
import subscripts from './config/subscripts';

// global namespace
declare global {
    var turing: any;
}

export default function initialize() {
    globalThis.turing = {
        table: DEFAULT_TABLE as Table,
        tape: DEFAULT_TAPE as Tape,

        utils: {
            save,
            exportTable,
            importTable,
            parseTable,

            convertToSubscript,

            table: {
                addState,
                removeState
            },

            tape: {
                setValue,
                setStart
            }
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

    // DEBUG
    globalThis.turing.table.nodes = new Array(10).fill(null).map((_, i) => {
        return new Array(10).fill(null).map((_, j) => {
            return {};
        });
    });
}
