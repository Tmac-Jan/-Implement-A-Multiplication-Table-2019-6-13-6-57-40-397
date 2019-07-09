//const isEachNumberFrom1To1000 = require('../main');
const isEachNumberFrom1To1000 = require('../main').isEachNumberFrom1To1000;
//const isStartNumberSmallerThanEndNumber = require('../main');
const isStartNumberSmallerThanEndNumber = require('../main').isStartNumberSmallerThanEndNumber;

it ('should get true two number when they are from 1 to 1000', () => {
    expect(isEachNumberFrom1To1000(2, 4)).toBe(true);
});
it ('should get false two number when startNumber is from 1 to 1000 and endNumber is bigger than 1000', () => {
    expect(isEachNumberFrom1To1000(2, 1001)).toBe(false);
});
it ('should get false two number when they are not from 1 to 1000', () => {
    expect(isEachNumberFrom1To1000(1000, 1)).toBe(false);
});
it ('should get true startNumber samller than endNumber', () => {
    expect(isStartNumberSmallerThanEndNumber(2, 4)).toBe(true);
});
it ('should get false startNumber bigger than endNumber', () => {
    expect(isStartNumberSmallerThanEndNumber(4, 2)).toBe(false);
});