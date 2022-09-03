import React, { useState, useRef, useEffect } from 'react';

import '../../styles/components/editor/EditorNode.css';


export default function EditorNode(props: { value: string | null, onSetStart: Function, onInput: Function, start: boolean, focus: boolean }) {
    const inputRef = useRef(null);
    const EMPTY_SYMBOL = globalThis.turing.config.EMPTY_SYMBOL;
    const DOUBLE_CLICK_INTERVAL = globalThis.turing.config.DOUBLE_CLICK_INTERVAL;
    
    const [value, setValue] = useState(props.value || EMPTY_SYMBOL);
    const [style, setStyle] = useState((props.value ? "" : " null") + (props.start ? " start" : ""));

    let lastClick: number = 0;

    function handleChange(ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        if (event.inputType === "deleteContentBackward") {
            setValue(EMPTY_SYMBOL);
            setStyle(style + " null");
            props.onInput(false);
            return;
        }

        if (event.inputType === "insertText") {
            setValue(event.data!);
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
            setStyle(style + " start");
        }
        lastClick = ev.timeStamp;
    }

    function handleFocus(ev: React.FocusEvent) {
        const target = ev.target as HTMLInputElement;
        target.setSelectionRange(1, 1);
    }

    // start changed
    useEffect(() => {
        if (props.start) {
            setStyle(style + " start");
        } else {
            setStyle(style.replaceAll("start", "").trim());
        }
    }, [props.start]);

    // focus changed
    useEffect(() => {
        if (props.focus) (inputRef.current! as HTMLInputElement).focus();
    }, [props.focus]);

    // on mount
    useEffect(() => {
        if (props.start) {
            const target = inputRef.current! as HTMLInputElement;
            console.log(target);
            target.parentElement!.parentElement!.scrollLeft = target.parentElement!.offsetLeft - window.innerWidth / 2 + target.parentElement!.offsetWidth / 2;
        }
    }, []);

    return (
        <div className={"EditorNode" + " " + style}>
            <input 
                onChange={handleChange} 
                onClick={handleClick}
                onFocus={handleFocus}
                value={value} 
                ref={inputRef}
            />
        </div>
    );
}
