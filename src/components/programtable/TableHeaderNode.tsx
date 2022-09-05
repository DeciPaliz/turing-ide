import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableHeaderNode.css';

export default function TableHeaderNode(props: { index: number }) {
    return (
        <div className="TableHeaderNode">
            <input disabled={true} value={"q" + globalThis.turing.utils.convertToSubscript(props.index) } />
        </div>
    );
}
