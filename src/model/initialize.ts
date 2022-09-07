import Table, { EMPTY_SYMBOL, DEFAULT_TABLE } from './types/table';
import Tape, { DEFAULT_TAPE } from './types/tape';

import save from './functions/save';
import load from './functions/load';
import exportTable from './functions/exporttable';
import importTable from './functions/importtable';

import convertToSubscript from './functions/converttosubscript';

import { addState, removeState, addSymbolRow, removeSymbolRow } from './functions/table/buttons';
import { onTableNodeChange, tableListeners, invokeTableListeners } from './functions/table/subscriptions';

import { setValue, setStart } from './functions/tape/editor';
import { tapeListeners, invokeTapeListeners } from './functions/tape/subscriptions';

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
            load,
            exportTable,
            importTable,

            convertToSubscript,

            table: {
                addState,
                removeState,
                addSymbolRow,
                removeSymbolRow,

                subscriptions: {
                    onTableNodeChange,
                    tableListeners,
                    invokeTableListeners
                }
            },

            tape: {
                setValue,
                setStart,
                
                subscriptions: {
                    tapeListeners,
                    invokeTapeListeners
                }
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

    globalThis.turing.table.alphabet = [EMPTY_SYMBOL, "a", "b", "c", "d", "e", "f", "g", "h", "i"];

    // is this rational?
    globalThis.turing.utils.tape.subscriptions.tapeListeners.push(() => {
        save();
    });

    globalThis.turing.utils.table.subscriptions.tableListeners.push(() => {
        save();
    });
}
