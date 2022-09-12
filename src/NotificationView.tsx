import React, { useRef, useState, useEffect } from 'react';

import './styles/Notification.css';

export default function NotificationView() {
    const [style, setStyle] = useState("hidden");
    const [header, setHeader] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut labore et dolore magna aliqua.");
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temport incididunt ut labore et dolore magna aliqua.");

    function handleClick(_ev: React.MouseEvent) {
        if (style !== "hidden") {
            setStyle("hidden");
            turing.notification.onHide();
        }
    }

    useEffect(() => {
        // limit header
        if (header.length > 18)
            setHeader(header.slice(0, 15) + "...")
    }, [header]);

    useEffect(() => {
        turing.notification.setVisible = (visible?: boolean) => {
            if (visible === undefined || visible) {
                setStyle("");
                turing.notification.isShown = true;
            } else {
                if (style !== "hidden") setStyle("hidden");
                turing.notification.onHide();
            }
        }
        turing.notification.setText = (headerText?: string, descriptionText?: string) => {
            if (headerText !== undefined) setHeader(headerText);
            if (descriptionText !== undefined) setDescription(descriptionText);
        };
    }, []);

    return (
        <div className={"Notification " + style} onClick={handleClick}>
            <span className={"NotificationHeader " + style}>{header}</span>
            <span className={"NotificationDescription " + style}>{description}</span>
        </div>
    );
}
