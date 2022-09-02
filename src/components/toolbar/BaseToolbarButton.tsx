import React from 'react';
import '../../styles/components/toolbar/BaseToolbarButton.css';

export type BaseToolbarButtonProps = {
    onClick?: Function
};

export type BaseToolbarButtonState = {};

export default class BaseToolbarButton extends React.Component<BaseToolbarButtonProps, BaseToolbarButtonState> {
    state: BaseToolbarButtonState = {};

    readonly className: string;

    constructor(props: BaseToolbarButtonProps, className: string) {
        super(props);

        this.className = className;
    }

    render() {
        return (
            <div className={this.className}>
            </div>
        );
    }

    click() {}
}
