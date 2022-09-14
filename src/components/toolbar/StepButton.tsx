import '../../styles/components/toolbar/StepButton.css';
import BaseToolbarButton, { BaseToolbarButtonProps } from './BaseToolbarButton';

export default class StepButton extends BaseToolbarButton {
    constructor(props: BaseToolbarButtonProps) {
        super(props, "StepButton");
    };

    override click() {
        turing.runner.step();
    };
}
