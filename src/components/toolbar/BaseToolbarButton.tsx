import React from 'react';
import '../../styles/components/toolbar/BaseToolbarButton.css';

import turing from '../../model/initialize';

export type BaseToolbarButtonProps = {
    onClick?: Function
};

export type BaseToolbarButtonState = {};

export default class BaseToolbarButton extends React.Component<BaseToolbarButtonProps, BaseToolbarButtonState> {
    state: BaseToolbarButtonState = {};
    icon: string = turing.resources.ToolbarButton["default"];

    readonly className: string;

    constructor(props: BaseToolbarButtonProps, className: string) {
        super(props);

        this.className = className;

        const icon = turing.resources.ToolbarButton[className];
        if (icon) {
            this.icon = icon;
        }
    }

    render() {
        return (
            <div className={this.className}>
                <img src={this.icon} width="50px" height="50px"></img>
            </div>
        );
    }

    click() {}
}
