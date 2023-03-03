"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherLeftShift_1 = require("./CipherLeftShift");
const CipherRightShift_1 = require("./CipherRightShift");
const displayCipherDecipher_1 = require("./displayCipherDecipher");
//module for testing
const shift = 10000000000;
console.log("************************Cipher Right Shift");
const crs = new CipherRightShift_1.CipherRightShift(shift);
(0, displayCipherDecipher_1.displayCipherDecipher)(crs, "Hello World!!!");
console.log("************************Cipher Left Shift");
const cls = new CipherLeftShift_1.CipherLeftShift(shift);
(0, displayCipherDecipher_1.displayCipherDecipher)(cls, "Hello World!!!");
//# sourceMappingURL=app.js.map