//const isEachNumberFrom1To1000 = require('../main');
const isEachNumberFrom1To1000 = require('../main').isEachNumberFrom1To1000;
//const isStartNumberSmallerThanEndNumber = require('../main');
const isStartNumberSmallerThanEndNumber = require('../main').isStartNumberSmallerThanEndNumber;
const getEquationString = require('../main').getEquationString;
const generateMultiplicationTable = require('../main').generateMultiplicationTable
const getMultiplicationTableString = require('../main').getMultiplicationTableString

it ('should get true two number when they are from 1 to 1000', () => {
    expect(isEachNumberFrom1To1000(2, 4)).toBe(true);
});
it ('should get false two number when startNumber is from 1 to 1000 and endNumber is bigger than 1000', () => {
    expect(isEachNumberFrom1To1000(2, 1001)).toBe(false);
});
it ('should get false two number when they are not from 1 to 1000', () => {
    expect(isEachNumberFrom1To1000(1000, 1)).toBe(false);
});
it ('should get true when startNumber samller than endNumber', () => {
    expect(isStartNumberSmallerThanEndNumber(2, 4)).toBe(true);
});
it ('should get false when startNumber bigger than endNumber', () => {
    expect(isStartNumberSmallerThanEndNumber(4, 2)).toBe(false);
});
it ('should get a String when give two multipliers  ', () => {
    expect(getEquationString(1, 2)).toBe('1*2=2 ');
});
it ('should generateMultiplicationTable  when give two valid multipliers then get a String is not null   ', () => {
      const reString='2*1=2 2*2=4 \n3*1=3 3*2=6 3*3=9 \n4*1=4 4*2=8 4*3=12 4*4=16 '
        expect(generateMultiplicationTable(2, 4)).toBe(reString);
});
it ('should get a getMultiplicationTable String when give two multipliers  ', () => {
    const reString='2*1=2 2*2=4 \n'+'3*1=3 3*2=6 3*3=9 \n'+'4*1=4 4*2=8 4*3=12 4*4=16 \n';
    expect(generateMultiplicationTable(2, 4)).toBe(reString);
});
it ('should get a getMultiplicationTable String when give one valid multipliers and a not valid multipliers  ', () => {
    expect(generateMultiplicationTable(0, 2)).toBe(null);
});
//it ('should get a String when give two multipliers  ', () => {
//    expect(getEquationString(1, 2)).toBe('1*2=2 ');
//});
