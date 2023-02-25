"use strict";
//  HW-29
const FIRST_CHAR = 97;
const LAST_CHAR = 122;
function shiftRound(str, shift) {
    let stringArray;
    stringArray = str.split("").map(function (symbol) {
        let asciiCode = symbol.charCodeAt(0);
        let shiftCalculation = asciiCode + shift;
        if (asciiCode >= FIRST_CHAR && asciiCode <= LAST_CHAR) {
            if ((shiftCalculation) > LAST_CHAR) {
                symbol = String.fromCharCode(shiftCalculation - (LAST_CHAR - FIRST_CHAR + 1));
            }
            else {
                symbol = String.fromCharCode(shiftCalculation);
            }
        }
        return symbol;
    });
    return stringArray.join('');
}
function unShiftRound(str, shift) {
    let stringArray;
    stringArray = str.split("").map(function (symbol) {
        let asciiCode = symbol.charCodeAt(0);
        let shiftCalculation = asciiCode - shift;
        if (asciiCode >= FIRST_CHAR && asciiCode <= LAST_CHAR) {
            if ((shiftCalculation) < FIRST_CHAR) {
                symbol = String.fromCharCode(LAST_CHAR - FIRST_CHAR + 1 + shiftCalculation);
            }
            else {
                symbol = String.fromCharCode(shiftCalculation);
            }
        }
        return symbol;
    });
    return stringArray.join('');
}
// Test Case Example for shiftRound function
let input = "aabx!";
let shift = 4;
let output = shiftRound(input, shift);
let expectedOutput = "eefb!";
console.log(`Test Case Example for shiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
console.log("");
// Test Case Example for unShiftRound function
input = "eefb!";
shift = 4;
output = unShiftRound(input, shift);
expectedOutput = "aabx!";
console.log(`Test Case Example for unShiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
console.log("");
// Test Case 1 for shiftRound function
input = "hello";
shift = 3;
output = shiftRound(input, shift);
expectedOutput = "khoor";
console.log(`Test Case 1 for shiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
console.log("");
// Test Case 2 for shiftRound function
input = "xyz";
shift = 5;
output = shiftRound(input, shift);
expectedOutput = "cde";
console.log(`Test Case 2 for shiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
console.log("");
// Test Case 3 for shiftRound function
input = "the quick brown fox jumps over the lazy dog!";
shift = 5;
output = shiftRound(input, shift);
expectedOutput = "ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!";
console.log(`Test Case 3 for shiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
console.log("");
// Test Case 4 for unShiftRound function
input = "khoor";
shift = 3;
output = unShiftRound(input, shift);
expectedOutput = "hello";
console.log(`Test Case 4 for unShiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
console.log("");
// Test Case 5 for unShiftRound function
input = "cde";
shift = 5;
output = unShiftRound(input, shift);
expectedOutput = "xyz";
console.log(`Test Case 5 for unShiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
console.log("");
// Test Case 6 for unShiftRound function
input = "ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!";
shift = 5;
output = unShiftRound(input, shift);
expectedOutput = "the quick brown fox jumps over the lazy dog!";
console.log(`Test Case 6 for unShiftRound function: ${input} , with shift of ${shift}, and expected output: ${expectedOutput}`);
console.log(output === expectedOutput ? `>>> Passed` : `>>> Failed with output: ${output}`);
//# sourceMappingURL=app.js.map