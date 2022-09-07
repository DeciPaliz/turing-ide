import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableNode.css';

export type TableNodeInputs = { symbol?: string, programState?: number, direction?: "Л" | "П" | "Н!" };

enum TableNodeInputType {
    left,
    center,
    right
};

export default function TableNode(props: { row: number, col: number, programState: number, getInputs?: Function, inputs: TableNodeInputs }) {
    let leftRef = useRef(null);
    let centerRef = useRef(null);
    let rightRef = useRef(null);

    const EMPTY_SYMBOL = globalThis.turing.config.EMPTY_SYMBOL;

    const LEFT_DEFAULT = EMPTY_SYMBOL;
    const CENTER_DEFAULT = props.programState;
    const RIGHT_DEFAULT = "Н!";

    const [symbol, setSymbol] = useState(props.inputs.symbol || LEFT_DEFAULT);
    const [programState, setProgramState] = useState(props.inputs.programState || CENTER_DEFAULT);
    const [direction, setDirection] = useState(props.inputs.direction || RIGHT_DEFAULT);

    const [defaultState, setDefaultState] = useState(programState === CENTER_DEFAULT);

    const onTableNodeChange = globalThis.turing.utils.table.subscriptions.onTableNodeChange.bind(null, props.row, props.col);

    function handleChange(input: TableNodeInputType, ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        const target = ev.target as HTMLInputElement;
        if (event.inputType === "deleteContentBackward") {
            switch (input) {
                case TableNodeInputType.left:
                    setSymbol(LEFT_DEFAULT);
                    onTableNodeChange({ type: "symbol", data: LEFT_DEFAULT });
                    target.setSelectionRange(1, 1);
                    return;
                case TableNodeInputType.center:
                    let newProgramState = programState;
                    newProgramState = Number(String(newProgramState).slice(0, String(newProgramState).length-1));
                    if (newProgramState === 0) {
                        newProgramState = CENTER_DEFAULT;
                        setDefaultState(true);
                    }
                    setProgramState(newProgramState);
                    onTableNodeChange({ type: "state", data: newProgramState });
                    target.setSelectionRange(1, 1);
                    return;
                case TableNodeInputType.right:
                    setDirection(RIGHT_DEFAULT);
                    onTableNodeChange({ type: "direction", data: RIGHT_DEFAULT });
                    target.setSelectionRange(1, 1);
                    return;
            }
        }
        if (event.inputType === "insertText") {
            const key = event.data as string;
            console.log(key);
            if (!key) return;
            switch (input) {
                case TableNodeInputType.left:
                    setSymbol(key);
                    onTableNodeChange({ type: "symbol", data: key });
                    target.setSelectionRange(1, 1);
                    return;
                case TableNodeInputType.center:
                    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(key) === -1) return;
                    if (defaultState) {
                        setProgramState(Number(key));
                        onTableNodeChange({ type: "state", data: Number(key) });
                        setDefaultState(false);
                    } else {
                        setProgramState(Number(String(programState) + key));
                        onTableNodeChange({ type: "state", data: Number(String(programState) + key) });
                    }
                    target.setSelectionRange(1, 1);
                    return;
                case TableNodeInputType.right:
                    if (["l", "L", "k", "K", "л", "Л"].indexOf(key) !== -1) {
                        setDirection("Л");
                        onTableNodeChange({ type: "direction", data: "Л" });
                        return;
                    }
                    if (["r", "R", "g", "G", "п", "П"].indexOf(key) !== -1) {
                        setDirection("П");
                        onTableNodeChange({ type: "direction", data: "П" });
                        return;
                    }
                    if (["n", "N", "y", "Y", "н", "Н", "!"].indexOf(key) !== -1) {
                        setDirection("Н!");
                        onTableNodeChange({ type: "direction", data: "Н!" });
                        return;
                    }
                    return;
            }
        }
    }

    function handleFocus(ev: React.FocusEvent) {
        const target = ev.target! as HTMLInputElement;
        target.setSelectionRange(1, 1);
    }

    useEffect(() => {
        globalThis.turing.utils.table.subscriptions.tableListeners.push(() => {
            const node = globalThis.turing.table.nodes[props.row][props.col];
            if (node.symbol !== symbol) {
                setSymbol(node.symbol || LEFT_DEFAULT);
            }
            if (node.programState !== programState) {
                setProgramState(node.programState || CENTER_DEFAULT);
                if (node.programState) {
                    setDefaultState(false);
                } else {
                    setDefaultState(true);
                }
            }
            if (node.direction !== direction) {
                setDirection(node.direction || RIGHT_DEFAULT);
            }
        });
    }, []);

    return (
        <div className="TableNode">
            <input 
                className={"tablenode-left " + (symbol === LEFT_DEFAULT ? "default" : "")} 
                ref={leftRef} 
                value={symbol} 
                onChange={handleChange.bind(null, TableNodeInputType.left)}
                onFocus={handleFocus}
            />
            <input 
                className={"tablenode-center " + (defaultState ? "default" : "")} 
                ref={centerRef} 
                value={"q" + globalThis.turing.utils.convertToSubscript(programState)} 
                onChange={handleChange.bind(null, TableNodeInputType.center)}
                onFocus={handleFocus}
            />
            <input 
                className={"tablenode-right " + (direction === RIGHT_DEFAULT ? "default" : "")} 
                ref={rightRef} 
                value={direction} 
                onChange={handleChange.bind(null, TableNodeInputType.right)}
                onFocus={handleFocus}
            />
        </div>
    );
}
