import React, { useState } from 'react';
import './styles/Editor.css';

import EditorNode from './components/editor/EditorNode';

export default function Editor() {
    const [tape, setTape] = useState<Array<string | null>>([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "a", "b", "c", null, null, null, null, null, null, null, null, null, null, null]); 

    return (
        <div className="Editor">
            {tape.map((node, index) => 
                <EditorNode key={index} value={node} />
            )}
        </div>
    );
}
