// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return false if gamertag is undefined', () => {
        const result = isValid(undefined);
        expect(result).toBe(false);
    });
    test('should return false if gamertag length is less than 8', () => {
        const result = isValid('azert');
        expect(result).toBe(false);
    });
    test('should return false if gamertag doesnt contain special character', () => {
        const result = isValid('azertyuio');
        expect(result).toBe(false);
    });
    test('should return false if gamertag doesnt contain number', () => {
        const result = isValid('azertyuio#');
        expect(result).toBe(false);
    });
    test('should return false if gamertag  length > 8 and doenst contain special character and contain at least 1 number', () => {
        const result = isValid('azertyuio1');
        expect(result).toBe(false);
    });
    test('should return false if gamertag  length > 8 and contain special character and doenst contain at least 1 number', () => {
        const result = isValid('azertyuio#');
        expect(result).toBe(false);
    });
    test('should return true if gamertag  length > 8 and contain special character and at least 1 number', () => {
        const result = isValid('azertyuio#1');
        expect(result).toBe(true);
    });
});
