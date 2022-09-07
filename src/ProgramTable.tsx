import React, { useRef, useState, useEffect } from 'react';
import './styles/ProgramTable.css';

import TableRow from './components/programtable/TableRow';
import TableHeader from './components/programtable/TableHeader';
import TableAddSymbolButton  from './components/programtable/TableAddSymbolButton';

export default function ProgramTable() {
    const table = globalThis.turing.table;
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    useEffect(() => {
        globalThis.turing.utils.table.subscriptions.updateTableListeners.push(function () {
            const table = globalThis.turing.table;
            if (table.nodes.length !== rows) setRows(table.nodes.length);
            if (table.nodes[0].length !== cols) setCols(table.nodes[0].length);
        });
    }, []);

    return (
        <div className="ProgramTable">
            <TableHeader />
            {new Array(rows).fill(null).map((_, i) => <TableRow key={i} symbol={table.alphabet[i]} row={i} cols={cols} />)}
            <TableAddSymbolButton />
        </div>
    );
}
