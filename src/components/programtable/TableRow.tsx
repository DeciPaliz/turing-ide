import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableRow.css';

import TableNode from './TableNode';
import TableSymbol from './TableSymbol';

export default function TableRow(props: { symbol: string, row: number, cols: number }) {
    return (
        <div className="TableRow">
            <TableSymbol value={props.symbol} disabled={props.row === 0} />
            {new Array(props.cols).fill(null).map((_, i) => <TableNode row={props.row} col={i} key={i+1} programState={i+1} inputs={{}} />)}
        </div>
    );
}
