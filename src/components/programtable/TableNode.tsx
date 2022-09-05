import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableNode.css';

export type TableNodeInputs = { symbol?: string, programState?: number, direction?: "Л" | "П" | "Н!" };

export default function TableNode(props: { programState: number, inputs: TableNodeInputs }) {
    let leftRef = useRef(null);
    let centerRef = useRef(null);
    let rightRef = useRef(null);

    const EMPTY_SYMBOL = globalThis.turing.config.EMPTY_SYMBOL;

    props.inputs.symbol = props.inputs.symbol || EMPTY_SYMBOL;
    props.inputs.programState = props.inputs.programState || props.programState;
    props.inputs.direction = props.inputs.direction || "Н!";

    return (
        <div className="TableNode">
            <input className="tablenode-left" ref={leftRef} value={props.inputs.symbol} />
            <input className="tablenode-center" ref={centerRef} value={"q" + globalThis.turing.utils.convertToSubscript(props.inputs.programState)} />
            <input className="tablenode-right" ref={rightRef} value={props.inputs.direction} />
        </div>
    );
}
