type Table = {
    nodes: Array<Array<ProgramNode>>,      // index is the state
    alphabet: Array<string>,               // index is the row
    comments: Array<string>
};

export type ProgramNode = {
    symbol: string | undefined,
    programState: number | undefined,
    direction: "Л" | "П" | "Н!" | undefined
};

export default Table;

export const EMPTY_SYMBOL = "a₀";

export const DEFAULT_TABLE: Table = {
    nodes: new Array(1).fill(new Array(1).fill({})),
    alphabet: new Array(1).fill(EMPTY_SYMBOL),
    comments: new Array(1).fill("")
};
