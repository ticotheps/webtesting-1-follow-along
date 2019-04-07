const { add, multiply } = require('./math.js');

// SUT: System Under Test
// test suite > test cases > assertions > matchers

// test suite = whole file

// example of a test cases (below)
//---------------------------------------------

// Real-World-Scenario
// adds two numbers
test('adds two numbers correctly', () => {
    expect(add(2, 2)).toBe(4); 
    expect(add(1, 3)).toBe(4); 
    expect(add(-1, 3)).toBe(2); 
});

// a test case that expects to THROW an error when passed a string
it('math.add() should return null when arguments are not numbers', () => {
    expect(add()).toBeNull();
    expect(add(1)).toBeNull();
    expect(add(null, 1)).toBeNull();
    expect(add(undefined, 1)).toBeNull();
    expect(add(3, '4')).toBeNull();
    expect(add({}, '4')).toBeNull();
    expect(add([], '4')).toBeNull();
    expect(add(NaN, '4')).toBeNull();
});

it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
});

//---------------------------------------------

// What if I passed the following into my function???
// Would my test cases break? Write them down and TEST them.
// passing NON-NUMBERS
// passing strings
// passing undefined, NaN, null
// only one argument
// no arguments (same as passing 'undefined')
// objects, arrays, boolean
// extra arguments

//---------------------------------------------
// Perfect-World-Scenario
// test('adds two numbers', () => {
//     // Phase 1: Arrange (setup)
//     const expected = 4;

//     // Phase 2: Act (run SUT)
//     const actual = math.add(2, 2);

//     // Phase 3: assert
//     expect(actual).toBe(expected); // assertion
//     // using the '.toBe()' matcher

//     // shorter way to consolidate all three phases 
//     // into one line (below)
//     expect(math.add(2, 2)).toBe(4); 
// });
