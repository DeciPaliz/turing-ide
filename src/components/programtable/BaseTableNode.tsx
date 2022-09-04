import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/BaseTableNode.css';

// :)
export default function BaseTableNode(props: { className: string, onClick: Function, onDoubleClick: Function }) {
    const inputRef = useRef(null);

    const [style, setStyle] = useState("");
    const [value, setValue] = useState("        ");

    function handleChange(ev: React.ChangeEvent) {
        
    };

    function handleClick(ev: React.MouseEvent) {

    };

    function handleFocus(ev: React.FocusEvent) {

    };

    return (
        <div className={"BaseTableNode " + props.className + " " + style}>
            <input 
                onChange={handleChange} 
                onClick={handleClick}
                onFocus={handleFocus}
                value={value} 
                ref={inputRef}
            />
        </div>
    );
}
