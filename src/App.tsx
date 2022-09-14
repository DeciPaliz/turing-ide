import React, { useEffect } from 'react';

import './styles/App.css';

import Toolbar from './Toolbar';
import Editor from './Editor';
import ProgramTable from './ProgramTable';
import NotificationView from './NotificationView';

export default function App() {
    useEffect(() => {
        globalThis.turing.utils.load();
        globalThis.turing.utils.table.subscriptions.invokeTableListeners();
    }, []);

    function dragHandler(ev: React.DragEvent) {
        ev.preventDefault();
    };

    function dropHandler(ev: React.DragEvent) {
        ev.preventDefault();

        const file: File = ev.dataTransfer.files[0];
        file.text().then((value) => {
            turing.utils.importTable(value);
        });
    };


    return (
        <div className="App" onDragOver={dragHandler} onDrop={dropHandler}>
            <Toolbar />
            <Editor />
            <ProgramTable />
            <NotificationView />
        </div>
    );
}
