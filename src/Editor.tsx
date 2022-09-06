import React, { useState } from 'react';
import './styles/Editor.css';

import EditorNode from './components/editor/EditorNode';

export default function Editor() {
    const [tape, setTape] = useState<Array<string | null>>(globalThis.turing.config.DEFAULT_TAPE.nodes); 
    let firstStarts = new Array(tape.length).fill(false);
    firstStarts[globalThis.turing.config.DEFAULT_TAPE.start] = true;
    const [starts, setStarts] = useState(firstStarts);
    const [focuses, setFocuses] = useState(new Array(tape.length).fill(false));

    function nodeSetStart(index: number) {
        let newStarts = starts.map((_, sIndex) => sIndex === index);
        setStarts(newStarts);
    }

    function nodeInput(index: number, forward: boolean) {
        index = index + (forward ? 1 : -1);
        let newFocuses = focuses.map((_, fIndex) => fIndex === index);
        setFocuses(newFocuses);
    }

    return (
        <div className="Editor">
            {tape.map((node, index) => <EditorNode key={index} index={index} onSetStart={nodeSetStart.bind(null, index)} onInput={nodeInput.bind(null, index)} focus={focuses[index]} />)}
        </div>
    );
}
