import Table from './types/table';

import save from './functions/save';
import exportTable from './functions/exporttable';
import importTable from './functions/importtable';
import parseTable from './functions/parsetable';

import resources from './config/resources';

// global namespace
let turing = {
    initialize: null as (() => void) | null,
    table: null as Table | null,

    save,
    exportTable,
    importTable,
    parseTable,

    resources
};

turing.initialize = function () {
    // TODO: load last programtable from localstorage
};

export default turing;
