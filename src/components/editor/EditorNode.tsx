import React, { useState, useRef, useEffect } from 'react';

import '../../styles/components/editor/EditorNode.css';


export default function EditorNode(props: { index: number, onSetStart: Function, onInput: Function, focus: boolean }) {
    const inputRef = useRef(null);
    const EMPTY_SYMBOL = globalThis.turing.config.EMPTY_SYMBOL;
    const DOUBLE_CLICK_INTERVAL = globalThis.turing.config.DOUBLE_CLICK_INTERVAL;
    
    const tape = globalThis.turing.tape;
    const [style, setStyle] = useState((tape.nodes[props.index] ? "" : " null") + (tape.start === props.index ? " start" : ""));

    let lastClick: number = 0;

    function handleChange(ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        if (event.inputType === "deleteContentBackward") {
            globalThis.turing.utils.tape.setValue(props.index, null);
            setStyle(style + " null");
            props.onInput(false);
            return;
        }

        if (event.inputType === "insertText") {
            globalThis.turing.utils.tape.setValue(props.index, event.data!);
            setStyle(style.replaceAll("null", "").trim());
            props.onInput(true);
        }
    }

    function handleClick(ev: React.MouseEvent) {
        const target = ev.target as HTMLInputElement;
        target.setSelectionRange(1, 1);
        if (ev.timeStamp - lastClick <= DOUBLE_CLICK_INTERVAL) {
            // doubleclick
            props.onSetStart();
            globalThis.turing.utils.tape.setStart(props.index);
            setStyle(style + " start");
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
            console.log(target);
            target.parentElement!.parentElement!.scrollLeft = target.parentElement!.offsetLeft - window.innerWidth / 2 + target.parentElement!.offsetWidth / 2;
        }
    }, []);

    return (
        <div className={"EditorNode" + " " + (props.index === globalThis.turing.tape.start ? "start" : "") + " " + (globalThis.turing.tape.nodes[props.index] ? "" : "null")}>
            <input 
                onChange={handleChange} 
                onClick={handleClick}
                onFocus={handleFocus}
                value={globalThis.turing.tape.nodes[props.index] || EMPTY_SYMBOL} 
                ref={inputRef}
            />
        </div>
    );
}
