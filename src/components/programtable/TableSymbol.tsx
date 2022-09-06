import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableSymbol.css';

export default function TableSymbol(props: { value: string }) {
    return (
        <div className="TableSymbol">
            <input value={props.value} />
        </div>
    );
}
