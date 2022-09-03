import Table from './types/table';

import save from './functions/save';
import exportTable from './functions/exporttable';
import importTable from './functions/importtable';
import parseTable from './functions/parsetable';

import resources from './config/resources';

// global namespace
declare global {
    var turing: any;
}

export default function initialize() {
    globalThis.turing = {
        table: null as Table | null,

        save,
        exportTable,
        importTable,
        parseTable,

        resources
    };
}
