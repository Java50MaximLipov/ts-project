// const aCodeAscii: number = 'a'.charCodeAt(0);
// const zCodeAscii: number = 'z'.charCodeAt(0);
// const nEnglishLetters: number = zCodeAscii - aCodeAscii + 1;

// //HW #29

// function shiftRound(str: string, shift: number): string {
//     return cipherDecipher(str, shift, mapperCipher);
// }

// function unshiftRound(str: string, shift: number): string {
//     return cipherDecipher(str, shift, mapperDecipher);
// }

// type MapperFunction = (symb: string, shift: number) => string;

// function cipherDecipher(str: string, shift: number, mapperFun: MapperFunction): string {
//     const arStr: Array<string> = Array.from(str);
//     const arRes: Array<string> = arStr.map(symb => {
//         let res: string = symb;
//         if (symb <= 'z' && symb >= 'a') {
//             res = mapperFun(symb, shift);
//         }
//         return res;
//     })
//     return arRes.join('');
// }

// function mapperCipher(symb: string, shift: number): string {
//     const actualShift: number = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
//     return String.fromCharCode(aCodeAscii + actualShift);
// }

// function mapperDecipher(symb: string, shift: number): string {
//     const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
//     return String.fromCharCode(zCodeAscii - actualShift);
// }

import { Cipher } from "./Cipher";
type MapperFunction = (symb: string, shift: number) => string;
const firstAsciiCode: number = ' '.charCodeAt(0);
const lastAsciiCode: number = '~'.charCodeAt(0);
const rangeLenght: number = lastAsciiCode - firstAsciiCode + 1;

export class CipherImp implements Cipher {
    #mapperFunCipher;
    #mapperFunDecipher;
    constructor(protected shift: number,
        mapperFunCipher: MapperFunction, mapperFunDecipher: MapperFunction) {
        this.shift = shift;
        this.#mapperFunCipher = mapperFunCipher;
        this.#mapperFunDecipher = mapperFunDecipher;
    }
    cipher(plainText: string): string {
        return this.cipherDecipher(plainText, this.shift, this.#mapperFunCipher)
    }
    decipher(plainText: string): string {
        return this.cipherDecipher(plainText, this.shift, this.#mapperFunDecipher)
    }
    cipherDecipher(str: string, shift: number,
        mapperFun: MapperFunction): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= '~' && symb >= ' ') {
                res = mapperFun(symb, shift);
            }
            return res;
        })
        return arRes.join('');
    }
    mapperCipher(symb: string, shift: number): string {
        const actualShift: number =
            (symb.charCodeAt(0) - firstAsciiCode + shift) % rangeLenght;
        return String.fromCharCode(firstAsciiCode + actualShift);
    }
    mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (lastAsciiCode - symb.charCodeAt(0) + shift) % rangeLenght;
        return String.fromCharCode(lastAsciiCode - actualShift);
    }
}