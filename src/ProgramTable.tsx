import React, { useRef, useState, useEffect } from 'react';
import './styles/ProgramTable.css';

import TableNode from './components/programtable/TableNode';
import TableHeaderNode from './components/programtable/TableHeaderNode';

export default function ProgramTable() {
    return (
        <div className="ProgramTable">
            <TableNode />
            <TableHeaderNode index={50} />
        </div>
    );
}
