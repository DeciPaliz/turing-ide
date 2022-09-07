export default function save(key?: string) {
    localStorage.setItem(key || "autosave", JSON.stringify({ table: globalThis.turing.table, tape: globalThis.turing.tape }));
}
