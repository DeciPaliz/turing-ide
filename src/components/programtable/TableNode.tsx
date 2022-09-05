import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableNode.css';

export type TableNodeInputs = { symbol?: string, programState?: number, direction?: "Л" | "П" | "Н!" };

export default function TableNode(props: { programState: number, inputs: TableNodeInputs }) {
    let leftRef = useRef(null);
    let centerRef = useRef(null);
    let rightRef = useRef(null);

    const [leftStyles, setLeftStyles] = useState("");
    const [centerStyles, setCenterStyles] = useState("");
    const [rightStyles, setRightStyles] = useState("");

    const EMPTY_SYMBOL = globalThis.turing.config.EMPTY_SYMBOL;

    const LEFT_DEFAULT = EMPTY_SYMBOL;
    const CENTER_DEFAULT = props.programState;
    const RIGHT_DEFAULT = "Н!";

    props.inputs.symbol = props.inputs.symbol || LEFT_DEFAULT;
    props.inputs.programState = props.inputs.programState || CENTER_DEFAULT;
    props.inputs.direction = props.inputs.direction || RIGHT_DEFAULT;

    return (
        <div className="TableNode">
            <input className={"tablenode-left " + (props.inputs.symbol === LEFT_DEFAULT ? "default" : "")} ref={leftRef} value={props.inputs.symbol} />
            <input className={"tablenode-center " + (props.inputs.programState === CENTER_DEFAULT ? "default" : "")} ref={centerRef} value={"q" + globalThis.turing.utils.convertToSubscript(props.inputs.programState)} />
            <input className={"tablenode-right " + (props.inputs.direction === RIGHT_DEFAULT ? "default" : "")} ref={rightRef} value={props.inputs.direction} />
        </div>
    );
}
