export function onTableNodeChange(row: number, col: number, value: { type: "symbol" | "state" | "direction", data: string | number | null }) {
    let table = globalThis.turing.table;
    if (table.nodes[row][col] === undefined) {
        table.nodes[row][col] = {};
    }
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

function replaceUndefined() {
    const table = globalThis.turing.table;
    globalThis.turing.table = table.nodes.map((row: Array<object>) => {
        return row.map((node?: object) => {
            if (!node && typeof(node) !== "object") return {};
            else return node;
        });
    });
}
