import { Cipher } from "./Cipher";

export function displayCipherDecipher(cipher: Cipher, text: string) {
    const cipherResult = cipher.cipher(text);
    console.log(`The original string is: ${text} .`);
    console.log(`The cipher >>> is: ${cipherResult} .`);
    console.log(`The decipher is: ${cipher.decipher(cipherResult)} .`);
    console.log(`~~~~~~~~`);
}