it('checks equality', () => {
    expect({ one: 1 }).toEqual({ one: 1 });
    expect([1, 2, 3, 4]).toEqual(expect.arrayContaining([1, 2, 3]));
});

/*
other interesting matchers
- .not() => tests the OPPOSITE of the passed in test
- .toBeCloseTo() => checks equality of floating point numbers; (number, numDigits)
- .toMatch() => checks that a string matches a reg ex
- .toHaveLength() => checks that a object has a .length property and that it is set to a numeric value
- .arrayContaining() => matches a received array which contains all of the elements in the expected array
- .stringContaining() => matches the received value if it is a string that contains the exact expected string
- .toContain() => checks that an item (or substring) is inside of an array (or another string)
*/

it('repairs to full durability', () => {
    const item = {
        name: 'Lambda Shield', 
        durability: 98,
        displayName: '[+3] Lambda Shield'
    };

    const expected = {
        name: 'Lambda Shield', 
        durability: 100,
        displayName: '[+3] Lambda Shield'
    };

    // Examples for today's project:
    // expect(enhancer.repair(item)).toEqual(expected)
    // expected(repair({ durability: 43 }).durability).toBe(100);
});

describe('Asynchronous tests', () => {
    it('async using callback', done => {
      // if done is not called, the test will fail
      setTimeout(done, 3000); // setTimeout will call done after 1s
    });

    it('async with promises', () => {
        // don't forget the return
        return new Promise(resolve => setTimeout(resolve, 1000));
      });
});