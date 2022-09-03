import React, { useState, useRef } from 'react';

import '../../styles/components/editor/EditorNode.css';

const DEFAULT_VALUE = "a₀";

export default function EditorNode() {
    const [value, setValue] = useState(DEFAULT_VALUE);
    const [style, setStyle] = useState("null");

    function handleChange(ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        if (event.inputType === "deleteContentBackward") {
            setValue(DEFAULT_VALUE);
            setStyle("null");
            return;
        }

        if (event.inputType === "insertText") {
            setValue(event.data!);
            setStyle("");
        }
    }

    return (
        <div className={"EditorNode" + " " + style}>
            <input onChange={handleChange} value={value} />
        </div>
    );
}
