import '../../styles/components/toolbar/HelpButton.css';
import BaseToolbarButton, { BaseToolbarButtonProps } from './BaseToolbarButton';

export default class HelpButton extends BaseToolbarButton {
    constructor(props: BaseToolbarButtonProps) {
        super(props, "HelpButton");
    }

    override click() {}
}
