import React, { useState, useRef, useEffect } from 'react';

import '../../styles/components/editor/EditorNode.css';

const DEFAULT_VALUE = "a₀";
const DOUBLE_CLICK_INTERVAL = 300;

export default function EditorNode(props: { value: string | null, onSetStart: Function, onInput: Function, start: boolean, focus: boolean }) {
    const inputRef = useRef(null);
    
    const [value, setValue] = useState(props.value || DEFAULT_VALUE);
    const [style, setStyle] = useState((props.value ? "" : " null") + (props.start ? " start" : ""));

    let lastClick: number = 0;

    function handleChange(ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        if (event.inputType === "deleteContentBackward") {
            setValue(DEFAULT_VALUE);
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
            console.log(ev.nativeEvent!.target);
        }
        lastClick = ev.timeStamp;
    }

    function handleFocus(ev: React.FocusEvent) {
        const target = ev.target as HTMLInputElement;
        target.setSelectionRange(1, 1);
    }

    useEffect(() => {
        if (props.start) {
            setStyle(style + " start");
        } else {
            setStyle(style.replaceAll("start", "").trim());
        }
    }, [props.start]);

    useEffect(() => {
        if (props.focus) (inputRef.current! as HTMLInputElement).focus();
    }, [props.focus]);

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
