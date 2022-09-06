export function setValue(index: number, value: string | null) {
    globalThis.turing.tape.nodes[index] = value;
}

export function setStart(index: number) {
    globalThis.turing.tape.start = index;
}
