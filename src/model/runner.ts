export let runnerState = {
    pointer: undefined as number | undefined,
    programState: undefined as number | undefined
};

enum StepResult {
    CONTINUE,
    TERMINATED
}

export const runnerSubscriptions = {
    runnerListeners: [],
    invokeRunnerListeners: function () {
        turing.runner.subscriptions.runnerListeners.forEach((listener?: Function) => {
            if (listener) listener();
        });
    }
};

export function step(): StepResult {
    const table = globalThis.turing.table;
    const tape = globalThis.turing.tape;
    const EMPTY_SYMBOL = globalThis.turing.config.EMPTY_SYMBOL;

    if (!globalThis.turing.runner.runnerState.pointer) {
        // initialize runner
        globalThis.turing.runner.runnerState = { pointer: tape.start, programState: 0 }
    }
    const runnerState = globalThis.turing.runner.runnerState;

    const symbol = tape.nodes[runnerState.pointer];
    let symbolIndex = table.alphabet.indexOf(symbol || EMPTY_SYMBOL);
    if (symbolIndex === -1) symbolIndex = 0; // symbol not found - treating as null symbol
    let node = table.nodes[symbolIndex][runnerState.programState] || {};
    node = { symbol: node.symbol, programState: node.programState, direction: node.direction || "Н!" };
    if (node.symbol === undefined || node.symbol === EMPTY_SYMBOL) node.symbol = null;
    if (node.programState) node.programState -= 1;
    else node.programState = runnerState.programState;
    
    tape.nodes[runnerState.pointer] = node.symbol;
    runnerState.programState = node.programState;
    switch (node.direction) {
        case "Л":
            runnerState.pointer -= 1;
            if (runnerState.pointer < 0) {
                runnerState.pointer = tape.nodes.length - 1;
            }
            break;
        case "П":
            runnerState.pointer += 1;
            if (runnerState.pointer >= tape.nodes.length) {
                runnerState.pointer = 0;
            }
            break;
    }

    globalThis.turing.utils.tape.subscriptions.invokeTapeListeners();

    if (!table.nodes[0][runnerState.programState]) return StepResult.TERMINATED;

    turing.runner.subscriptions.invokeRunnerListeners();
    
    return StepResult.CONTINUE;
}

export function run() {
    let result = StepResult.CONTINUE;
    let iteration = 0;
    while (result !== StepResult.TERMINATED && (iteration || 0) < globalThis.turing.config.MAX_ITERATIONS) {
        result = globalThis.turing.runner.step();
        iteration++;
    }
    if (iteration === globalThis.turing.config.MAX_ITERATIONS) {
        turing.notification.showNotification("Внимание!", "Ваша программа слишком долго выполняется. Возможен бесконечный цикл.", { urgent: true });
    } else {
        turing.notification.showNotification("Завершено", `Программа завершена после ${iteration} шагов.`);
    }
    turing.runner.runnerState = {};
}
