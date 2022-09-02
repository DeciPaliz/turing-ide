import './styles/Toolbar.css';

import TitleText from './components/toolbar/TitleText';
import RunButton from './components/toolbar/RunButton';
import SaveButton from './components/toolbar/SaveButton';
import ExportButton from './components/toolbar/ExportButton';
import HelpButton from './components/toolbar/HelpButton';

export default function Toolbar() {
    return (
        <div className="Toolbar">
            <TitleText />
            <RunButton />
            <SaveButton />
            <ExportButton />
            <HelpButton />
        </div>
    );
}
