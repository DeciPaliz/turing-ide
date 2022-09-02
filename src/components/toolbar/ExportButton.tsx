import '../../styles/components/toolbar/ExportButton.css';
import BaseToolbarButton, { BaseToolbarButtonProps } from './BaseToolbarButton';

export default class ExportButton extends BaseToolbarButton {
    constructor(props: BaseToolbarButtonProps) {
        super(props, "ExportButton");
    }

    override click() {}
}
