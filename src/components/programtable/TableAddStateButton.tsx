import React, { useRef, useState, useEffect } from 'react';
import '../../styles/components/programtable/TableAddStateButton.css';

export default function TableAddStateButton() {
    return (
        <div className="TableAddStateButton">
            <input type="button" value="-" onClick={globalThis.turing.utils.table.removeState} />
            <input type="button" value="+" onClick={globalThis.turing.utils.table.addState} />
        </div>
    );
}
