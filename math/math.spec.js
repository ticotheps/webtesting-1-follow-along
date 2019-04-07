const math = require('./math.js');

// SUT: System Under Test
// test suite > test cases > assertions > matchers

// test suite = whole file

// a test case (below)
// adds two numbers
test('adds two numbers', () => {
    // Phase 1: Arrange (setup)
    const expected = 4;

    // Phase 2: Act (run SUT)
    const actual = math.add(2, 2);

    // Phase 3: assert
    expect(actual).toBe(expected); // assertion
    // using the '.toBe()' matcher

    // shorter way to consolidate all three phases 
    // into one line (below)
    expect(math.add(2, 2)).toBe(4); 
});
