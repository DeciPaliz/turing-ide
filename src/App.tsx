import './styles/App.css';

import Toolbar from './Toolbar';
import Editor from './Editor';
import ProgramTable from './ProgramTable';

export default function App() {
    return (
        <div className="App">
            <Toolbar />
            <Editor />
            <ProgramTable />
        </div>
    );
}
