// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return false if gamertag is undefined', () => {
        const result = isValid(undefined);
        expect(result).toBe(false);
    });
    test('should return true if gamertag length is equal to 8', () => {
        const result = isValid("azertyui");
        expect(result).toBe(true);
    });
    test('should return true if gamertag length is more than 8', () => {
        const result = isValid("azertyui");
        expect(result).toBe(true);
    });
    test('should return false if gamertag length is less than 8', () => {
        const result = isValid("azer");
        expect(result).toBe(false);
    });
    test('should return false if no special character', () => {
        const result = isValid("azer");
        expect(result).toBe(false);
    });
    test('should return true if 1 special character', () => {
        const result = isValid("azer#");
        expect(result).toBe(true);
    });
});
