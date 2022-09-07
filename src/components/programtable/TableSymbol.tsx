import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableSymbol.css';

export default function TableSymbol(props: { disabled: boolean, value: string }) {
    return (
        <div className="TableSymbol">
            <input value={props.value} disabled={props.disabled} />
        </div>
    );
}
