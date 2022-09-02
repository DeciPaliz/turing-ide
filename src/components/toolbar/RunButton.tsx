import '../../styles/components/toolbar/RunButton.css';
import BaseToolbarButton, { BaseToolbarButtonProps } from './BaseToolbarButton';

export default class RunButton extends BaseToolbarButton {
    constructor(props: BaseToolbarButtonProps) {
        super(props, "RunButton");
    }

    override click() {};
}
