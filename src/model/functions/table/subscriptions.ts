export function onTableNodeChange(row: number, col: number, value: { type: "symbol" | "state" | "direction", data: string | number | null }) {
    let table = globalThis.turing.table;
    while (!table.nodes[row]) {
        table.nodes.push(new Array(table.nodes[0].length).fill(null).map(() => { return {}; }));
    }
    console.log("rows terminated");
    console.log(col);
    console.log(table.nodes[row][col]);
    while (table.nodes[row][col] === undefined) {
        table.nodes.forEach(function (nodesRow: Array<object>) {
            nodesRow.push({});
        });
    }
    if (!table.nodes[row][col]) table.nodes[row][col] = {};
    switch (value.type) {
        case "symbol":
            table.nodes[row][col].symbol = value.data;
            break;
        case "state":
            table.nodes[row][col].programState = value.data;
            break;
        case "direction":
            table.nodes[row][col].direction = value.data;
            break;
    }
}

export let tableListeners: Array<Function | undefined> = [];

export function invokeTableListeners() {
    const listeners: Array<Function | undefined> = globalThis.turing.utils.table.subscriptions.tableListeners;
    listeners.forEach(function (listener: Function | undefined) {
        if (listener) listener();
    });
}
