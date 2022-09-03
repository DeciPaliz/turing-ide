import React, { useState } from 'react';
import './styles/Editor.css';

import EditorNode from './components/editor/EditorNode';

export default function Editor(props: { start: number }) {
    const [tape, setTape] = useState<Array<string | null>>([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "a", "b", "c", null, null, null, null, null, null, null, null, null, null, null]); 
    let firstStarts = new Array(tape.length).fill(false);
    firstStarts[props.start] = true;
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
            {tape.map((node, index) => <EditorNode key={index} onSetStart={nodeSetStart.bind(null, index)} onInput={nodeInput.bind(null, index)} value={node} start={starts[index]} focus={focuses[index]} />)}
        </div>
    );
}
