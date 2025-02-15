import { test } from 'vitest';

test('keyContent', async (context) => {
    const {parseRoutePaths: routePaths} = await import('../src/lib/route/parseRoutePaths');
    const {parsePathKeys: pathKeys} = await import('../src/lib/path/parsePathKeys');
    const {parseKey: keyValue} = await import('../src/lib/key/parseKey');
    const {parseStep } = await import('../src/lib/step/parseStep');

    console.log(parseStep("[:{ciguli}[:{mama}].haha]>?"));
});