export function onTableNodeChange(row: number, col: number, value: { type: "symbol" | "state" | "direction", data: string | number | null }) {
    let table = globalThis.turing.table;
    if (!table.nodes[row] || !table.nodes[row][col]) return;
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
