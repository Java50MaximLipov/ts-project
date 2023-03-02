import { CipherLeftShift } from "./CipherLeftShift"
import { CipherRightShift } from "./CipherRightShift"
import { displayCipherDecipher } from "./displayCipherDecipher"

let cipherRightShift:  CipherRightShift = new CipherRightShift(2);
let cipherLeftShift: CipherLeftShift = new CipherLeftShift(3);

displayCipherDecipher(cipherRightShift, 'xyz42');
displayCipherDecipher(cipherLeftShift, 'abc567@ 0');
displayCipherDecipher(cipherRightShift, 'zZ!&4');

