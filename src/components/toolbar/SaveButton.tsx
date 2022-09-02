import '../../styles/components/toolbar/SaveButton.css';
import BaseToolbarButton, { BaseToolbarButtonProps } from './BaseToolbarButton';

export default class SaveButton extends BaseToolbarButton {
    constructor(props: BaseToolbarButtonProps) {
        super(props, "BaseToolbarButton");
    };

    override click() {};
}
