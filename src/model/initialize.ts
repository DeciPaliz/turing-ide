import save from './save';
import exportTable from './exporttable';
import importTable from './importtable';
import parseTable from './parsetable';
import Table from './table';

// global namespace
let turing = {
    initialize: null as (() => void) | null,
    table: null as Table | null,

    save,
    exportTable,
    importTable,
    parseTable
};

turing.initialize = function () {
    // load last programtable from localstorage
};

export default turing;
