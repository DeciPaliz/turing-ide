import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableHeader.css';

import TableHeaderNode from './TableHeaderNode';

export default function TableHeader(props: { cols: number }) {
    return (
        <div className="TableHeader">
            {new Array(props.cols).fill(null).map((_, i) => <TableHeaderNode key={i+1} index={i+1} />)}
        </div>
    );
}
