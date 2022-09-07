import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableHeader.css';

import TableHeaderNode from './TableHeaderNode';
import TableAddStateButton from './TableAddStateButton';

export default function TableHeader() {
    const [cols, setCols] = useState(0);

    useEffect(() => {
        globalThis.turing.utils.table.subscriptions.updateTableListeners.push(function () {
            console.log(globalThis.turing.table.nodes[0].length);
            if (globalThis.turing.table.nodes[0].length !== cols) setCols(globalThis.turing.table.nodes[0].length);
        });
    }, []);

    return (
        <div className="TableHeader">
            {new Array(cols).fill(null).map((_, i) => <TableHeaderNode key={i+1} index={i+1} />)}
            <TableAddStateButton />
        </div>
    );
}
