export default function exportTable() {
    const pom = document.createElement('a');
    pom.setAttribute('href', 'data:application/json;charset=utf08,' + encodeURIComponent(JSON.stringify({ table: turing.table, tape: turing.tape })));
    pom.setAttribute('download', 'turing-program.json');

    pom.click();
};
