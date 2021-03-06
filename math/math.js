// module.exports = {
//     add,
//     multiply,
// };

exports.add = (a, b) => {
    // Phase 1: Return 'null' FIRST to guarantee that the test CAN fail
    // and that you are testing the intended function.
    // return null; 

    // Phase 2: Write the LEAST amount of code for the test pass.
    // return 4;

    // Phase 3: Write the PROPER implementation to make the test pass in all cases.
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return null;
    }
};

exports.multiply = (a, b) => {
    return a * b;
};

