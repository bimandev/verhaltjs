/*import { test } from 'vitest';

test('keyContent', async (context) => {
    const {parseRoutePaths} = await import('../src/lib/route/parseRoutePaths');
    const {parsePathKeys} = await import('../src/lib/path/parsePathKeys');
    const {parseKey} = await import('../src/lib/key/parseKey');
    const {parseStep } = await import('../src/lib/step/parseStep');

    for(let i = 0; i < 10; i++) {
        parseRoutePaths(":manager>?.selected[:manager.target ?? mama]!.money>? ?? asdsa");
        parsePathKeys(":manager>?.selected[:manager.target ?? mama]!.money>?");
        parseKey(".selected[:manager.target ?? mama]!");
        console.log(parseStep("[:manager.target ?? mama]!"));
    }

    console.log(parseRoutePaths(":manager>?.selected[:manager.target ?? 'mama']!.money>? ?? asdsa"));
});*/