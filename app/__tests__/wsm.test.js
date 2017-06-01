const wsm = require('../wsm.js');

test('wsm module should export a function', () => {
    expect(typeof wsm).toBe('function');
});