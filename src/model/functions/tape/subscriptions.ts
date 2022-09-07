export let tapeListeners: Array<Function | undefined> = [];

export function invokeTapeListeners() {
    globalThis.turing.utils.tape.subscriptions.tapeListeners.forEach(function (listener: Function | undefined) { 
        if (listener) listener();
    });
}
