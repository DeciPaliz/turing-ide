import React, { useRef, useState, useEffect } from 'react';
import './styles/ProgramTable.css';

import TableRow from './components/programtable/TableRow';
import TableHeader from './components/programtable/TableHeader';

export default function ProgramTable() {
    const table = globalThis.turing.table;
    const [rows, setRows] = useState(table.nodes.length);
    const [cols, setCols] = useState(table.nodes[0].length);

    return (
        <div className="ProgramTable">
            <TableHeader cols={cols} />
            {new Array(rows).fill(null).map((_, i) => <TableRow key={i} symbol={table.alphabet[i]} row={i} cols={cols} />)}
        </div>
    );
}
