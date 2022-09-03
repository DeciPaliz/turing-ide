import React from 'react';
import './styles/Editor.css';

import EditorNode from './components/editor/EditorNode';

export type EditorProps = {};
export type EditorState = {};

export default class Editor extends React.Component<EditorProps, EditorState> {
    

    render() {
        return (
            <div className="Editor">
                <EditorNode />
            </div>
        );
    }
}
