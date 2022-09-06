import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableRow.css';

import TableNode from './TableNode';

export default function TableRow(props: { cols: number }) {
    return (
        <div className="TableRow">
            {new Array(props.cols).fill(null).map((_, i) => <TableNode key={i+1} programState={i+1} inputs={{}} />)}
        </div>
    );
}
