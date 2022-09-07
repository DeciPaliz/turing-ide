export function setValue(index: number, value: string | null) {
    globalThis.turing.tape.nodes[index] = value;
    globalThis.turing.utils.tape.subscriptions.invokeTapeListeners();
}

export function setStart(index: number) {
    globalThis.turing.tape.start = index;
    globalThis.turing.utils.tape.subscriptions.invokeTapeListeners();
}
