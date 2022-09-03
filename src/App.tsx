import React from 'react';

import './styles/App.css';

import Toolbar from './Toolbar';
import Editor from './Editor';
import ProgramTable from './ProgramTable';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Toolbar />
                <Editor />
                <ProgramTable />
            </div>
        );
    }
}
