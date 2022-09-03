type Tape = {
    nodes: Array<string | null>,
    start: number
};

export const DEFAULT_TAPE: Tape = {
    nodes: new Array(100).fill(null),
    start: 49
};

export default Tape;
