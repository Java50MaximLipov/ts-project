"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherLeftShift_1 = require("./CipherLeftShift");
const CipherRightShift_1 = require("./CipherRightShift");
const displayCipherDecipher_1 = require("./displayCipherDecipher");
let cipherRightShift = new CipherRightShift_1.CipherRightShift(2);
let cipherLeftShift = new CipherLeftShift_1.CipherLeftShift(3);
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherRightShift, 'xyz42');
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherLeftShift, 'abc567@ 0');
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherRightShift, 'zZ!&4');
//# sourceMappingURL=app.js.map