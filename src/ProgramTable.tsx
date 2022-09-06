import React, { useRef, useState, useEffect } from 'react';
import './styles/ProgramTable.css';

import TableRow from './components/programtable/TableRow';
import TableHeader from './components/programtable/TableHeader';

export default function ProgramTable() {
    return (
        <div className="ProgramTable">
            <TableRow cols={10} />
            <TableHeader cols={10} />
        </div>
    );
}
