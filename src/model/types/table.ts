type Table = {
    nodes: Array<ProgramNode>,      // index is the state
    alphabet: Array<string>,        // index is the "symbol" --\
    comments: Array<string>         //                         |
};                                  //                         |
                                    //                         |
export type ProgramNode = {         //                         |
    symbol: number | undefined,     // <-----------------------/
    state: number | undefined,
    direction: "Л" | "П" | "Н!" | undefined
};

export default Table;

export const EMPTY_SYMBOL = "a₀";

export const DEFAULT_TABLE: Table = {
    nodes: Array(1).fill({}),
    alphabet: Array(1).fill(EMPTY_SYMBOL),
    comments: Array(1).fill("")
};
