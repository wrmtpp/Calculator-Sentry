const hw2cal = require('./hw2cal')

describe('plus function', () => {
    test('return 3 if a = 1 and b = 2', () => {
        const a = 1;
        const b = 2;
        const expected = 3;
        const result = hw2cal.plus(a, b);
        expect(result).toBe(expected)
    })
});
    describe('minus function', () => {
        test('return 1 if a = 2 and b = 1', () => {
            const a = 2;
            const b = 1;
            const expected = 1;
            const result = hw2cal.minus(a, b);
            expect(result).toBe(expected)
        })

})