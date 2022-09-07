export let tapeListeners: Array<Function> = [];

export function invokeTapeListeners() {
    globalThis.turing.utils.tape.subscriptions.tapeListeners.forEach(function (listener: Function) { 
        listener()
    });
}
