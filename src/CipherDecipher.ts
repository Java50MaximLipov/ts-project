import { Cipher } from "./Cipher";
type MapperFunction = (symb: string, shift: number) => string;
const firstAsciiCode: number = ' '.charCodeAt(0);
const lastAsciiCode: number = '~'.charCodeAt(0);
const rangeLenght: number = lastAsciiCode - firstAsciiCode + 1;

export class CipherImp implements Cipher {
    #cipherFunction;
    #decipherFunction;
    constructor(protected shift: number, cipherFunction: MapperFunction, decipherFunction: MapperFunction) {
        this.shift = shift;
        this.#cipherFunction = cipherFunction;
        this.#decipherFunction = decipherFunction;
    }

    cipher(plainText: string): string {
        return this.cipherDecipher(plainText, this.shift, this.#cipherFunction)
    }

    decipher(plainText: string): string {
        return this.cipherDecipher(plainText, this.shift, this.#decipherFunction)
    }

    cipherDecipher(str: string, shift: number, mapperFunction: MapperFunction): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= '~' && symb >= ' ') {
                res = mapperFunction(symb, shift);
            }
            return res;
        })
        return arRes.join('');
    }

    mapperCipher(symb: string, shift: number): string {
        const actualShift: number = (symb.charCodeAt(0) - firstAsciiCode + shift) % rangeLenght;
        return String.fromCharCode(firstAsciiCode + actualShift);
    }
    
    mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (lastAsciiCode - symb.charCodeAt(0) + shift) % rangeLenght;
        return String.fromCharCode(lastAsciiCode - actualShift);
    }
}