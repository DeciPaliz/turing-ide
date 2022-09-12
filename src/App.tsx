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

    return (
        <div className="App">
            <Toolbar />
            <Editor />
            <ProgramTable />
            <NotificationView />
        </div>
    );
}
