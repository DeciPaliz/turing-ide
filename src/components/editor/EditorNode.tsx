import React, { useState, useRef, useEffect } from 'react';

import '../../styles/components/editor/EditorNode.css';


export default function EditorNode(props: { index: number, onSetStart: Function, onInput: Function, focus: boolean }) {
    const inputRef = useRef(null);
    const EMPTY_SYMBOL = globalThis.turing.config.EMPTY_SYMBOL;
    const DOUBLE_CLICK_INTERVAL = globalThis.turing.config.DOUBLE_CLICK_INTERVAL;
    
    const [symbol, setSymbol] = useState(null as string | null);
    const [current, setCurrent] = useState(false);
    const [start, setStart] = useState(false);

    let lastClick: number = 0;

    function handleChange(ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        if (event.inputType === "deleteContentBackward") {
            globalThis.turing.utils.tape.setValue(props.index, null);
            setSymbol(null);
            props.onInput(false);
            turing.utils.tape.subscriptions.invokeTapeListeners();
            return;
        }

        if (event.inputType === "insertText") {
            globalThis.turing.utils.tape.setValue(props.index, event.data!);
            setSymbol(event.data!);
            props.onInput(true);
            turing.utils.tape.subscriptions.invokeTapeListeners();
        }
    }

    function handleClick(ev: React.MouseEvent) {
        const target = ev.target as HTMLInputElement;
        target.setSelectionRange(1, 1);
        if (ev.timeStamp - lastClick <= DOUBLE_CLICK_INTERVAL) {
            // doubleclick
            props.onSetStart();
            globalThis.turing.utils.tape.setStart(props.index);
            turing.utils.tape.subscriptions.invokeTapeListeners();
        }
        lastClick = ev.timeStamp;
    }

    function handleFocus(ev: React.FocusEvent) {
        const target = ev.target as HTMLInputElement;
        target.setSelectionRange(1, 1);
    }

    // focus changed
    useEffect(() => {
        if (props.focus) (inputRef.current! as HTMLInputElement).focus();
    }, [props.focus]);

    // on mount
    useEffect(() => {
        if (props.index === globalThis.turing.tape.start) {
            const target = inputRef.current! as HTMLInputElement;
            target.parentElement!.parentElement!.scrollLeft = target.parentElement!.offsetLeft - window.innerWidth / 2 + target.parentElement!.offsetWidth / 2;
        }

        globalThis.turing.utils.tape.subscriptions.tapeListeners.push(() => {
            const tape = turing.tape;
            const node = tape.nodes[props.index];
            if (symbol !== node) {
                console.log(symbol, node);
                setSymbol(node);
            }

            if (tape.start === props.index) setStart(true);
            else setStart(false);
        });

        turing.runner.subscriptions.runnerListeners.push(() => {
            const pointer = turing.runner.runnerState.pointer;
            if (pointer === props.index) setCurrent(true);
            else setCurrent(false);
        });

        turing.utils.tape.subscriptions.invokeTapeListeners();
    }, []);

    return (
        <div className={"EditorNode" + " " + (current ? "current" : (start ? "start" : "")) + " " + (symbol ? "" : "null")}>
            <input 
                onChange={handleChange} 
                onClick={handleClick}
                onFocus={handleFocus}
                value={symbol || EMPTY_SYMBOL} 
                ref={inputRef}
            />
        </div>
    );
}
