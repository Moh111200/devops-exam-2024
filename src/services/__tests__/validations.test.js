// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return false if gamertag is undefined', () => {
        const result = isValid(undefined);
        expect(result).toBe(false);
    });
});
