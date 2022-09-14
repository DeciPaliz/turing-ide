export default function importTable(text: string) {
    try {
        const result = JSON.parse(text);
        if (!result.table || !result.tape) throw "error";
        turing.table = result.table;
        turing.tape = result.tape;
        turing.utils.table.subscriptions.invokeTableListeners();
        turing.utils.tape.subscriptions.invokeTapeListeners();
        
        
        turing.notification.showNotification("Загружено", "Программа успешно загружена.");
    } catch {
        turing.notification.showNotification("Ошибка", "Невозможно загрузить программу.", { urgent: true });
    }
};
