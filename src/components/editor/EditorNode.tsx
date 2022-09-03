import React, { useState, useRef } from 'react';

import '../../styles/components/editor/EditorNode.css';

const DEFAULT_VALUE = "a₀";

export default function EditorNode(props: { value: string | null }) {
    const inputRef = useRef(null);
    
    const [value, setValue] = useState(props.value || DEFAULT_VALUE);
    const [style, setStyle] = useState(props.value ? "" : " null");

    function handleChange(ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        if (event.inputType === "deleteContentBackward") {
            setValue(DEFAULT_VALUE);
            setStyle(" null");
            return;
        }

        if (event.inputType === "insertText") {
            setValue(event.data!);
            setStyle("");
        }
    }

    return (
        <div className={"EditorNode" + style}>
            <input 
                onChange={handleChange} 
                value={value} 
                ref={inputRef}
            />
        </div>
    );
}
