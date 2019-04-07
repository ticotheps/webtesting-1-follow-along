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