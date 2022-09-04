import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableNode.css';

export default function TableNode() {
    return (
        <div className="TableNode">
            <input className="tablenode-left" />
            <input className="tablenode-center" />
            <input className="tablenode-right" />
        </div>
    );
}
