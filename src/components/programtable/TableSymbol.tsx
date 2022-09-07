import React, { useRef, useState, useEffect } from 'react';

import '../../styles/components/programtable/TableSymbol.css';

export default function TableSymbol(props: { disabled: boolean, value: string, index: number }) {
    const [symbol, setSymbol] = useState(null as string | null);

    let subscriptionIndex: number | null = null;

    function handleChange(ev: React.ChangeEvent) {
        const event = ev.nativeEvent as InputEvent;
        if (event.inputType === "deleteContentBackward") {
            globalThis.turing.table.alphabet[props.index] = null;
            setSymbol(null);
            return;
        }

        if (event.inputType === "insertText") {
            globalThis.turing.table.alphabet[props.index] = event.data!;
            setSymbol(event.data!);
        }
    }

    function handleFocus(ev: React.FocusEvent) {
        const target = ev.target as HTMLInputElement;
        target.setSelectionRange(1, 1);
    }
    
    useEffect(() => {
        subscriptionIndex = globalThis.turing.utils.table.subscriptions.tableListeners.push(() => {
            const node = globalThis.turing.table.alphabet[props.index];
            if (node !== symbol) {
                setSymbol(node);
            }
        }) - 1;

        setSymbol(globalThis.turing.table.alphabet[props.index]);

        return () => {
            globalThis.turing.utils.table.subscriptions.tableListeners[subscriptionIndex!] = undefined;
        };
    }, []);

    return (
        <div className="TableSymbol">
            <input value={symbol || ""} onChange={handleChange} onFocus={handleFocus} disabled={props.disabled} />
        </div>
    );
}
