import React, { useState } from 'react';
import './styles/Editor.css';

import EditorNode from './components/editor/EditorNode';

export default function Editor(props: { start: number }) {
    const [tape, setTape] = useState<Array<string | null>>([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "a", "b", "c", null, null, null, null, null, null, null, null, null, null, null]); 
    let firstStarts = new Array(tape.length).fill(false);
    firstStarts[props.start] = true;
    const [starts, setStarts] = useState(firstStarts);
    

    function nodeSetStart(index: number) {
        let newStarts = starts.map((_, sIndex) => sIndex === index);
        setStarts(newStarts);
    }

    return (
        <div className="Editor">
            {tape.map((node, index) => <EditorNode key={index} onSetStart={nodeSetStart.bind(null, index)} value={node} start={starts[index]} />)}
        </div>
    );
}
