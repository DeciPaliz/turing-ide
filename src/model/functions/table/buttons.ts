import React from 'react';

export function addState(_ev: React.MouseEvent) {
    console.log("add");
    let table = globalThis.turing.table;
    for (let row of table.nodes)
        row.push({});
    globalThis.turing.utils.table.subscriptions.invokeTableListeners();
}

export function removeState(_ev: React.MouseEvent) {
    console.log("remove");
    let table = globalThis.turing.table;
    for (let row of table.nodes)
        row.pop()
    globalThis.turing.utils.table.subscriptions.invokeTableListeners();
}

export function addSymbolRow(_ev: React.MouseEvent) {
    let table = globalThis.turing.table;
    table.nodes.push(new Array(table.nodes[0].length).fill(null).map(() => {}));
    globalThis.turing.utils.table.subscriptions.invokeTableListeners();
}

export function removeSymbolRow(_ev: React.MouseEvent) {
    let table = globalThis.turing.table;
    table.nodes.pop();
    globalThis.turing.utils.table.subscriptions.invokeTableListeners();
}
