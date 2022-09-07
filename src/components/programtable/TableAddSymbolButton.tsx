import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableAddSymbolButton.css';

export default function TableAddSymbolButton() {
    return (
        <div className="TableAddSymbolButton">
            <input type="button" value="-" onClick={globalThis.turing.utils.table.removeSymbolRow} />
            <input type="button" value="+" onClick={globalThis.turing.utils.table.addSymbolRow} />
        </div>
    );
}
