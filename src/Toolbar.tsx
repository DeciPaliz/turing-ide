import './styles/Toolbar.css';

import TitleText from './components/toolbar/TitleText';
import RunButton from './components/toolbar/RunButton';
import StepButton from './components/toolbar/StepButton';
import ExportButton from './components/toolbar/ExportButton';
import HelpButton from './components/toolbar/HelpButton';

export default function Toolbar() {
    return (
        <div className="Toolbar">
            <div className="Toolbar-left">
                <TitleText />
            </div>
            <div className="Toolbar-center">
                <RunButton />
                <StepButton />
                <ExportButton />
            </div>
            <div className="Toolbar-right">
                <HelpButton />
            </div>
        </div>
    );
}
