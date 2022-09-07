export default function load(key?: string) {
    const json = localStorage.getItem(key || "autosave");
    if (!json) return;
    const data = JSON.parse(json);
    if (!data) return;
    globalThis.turing.table = data.table;
    globalThis.turing.utils.table.subscriptions.invokeTableListeners();

    globalThis.turing.tape = data.tape;
    globalThis.turing.utils.tape.subscriptions.invokeTapeListeners();
}
