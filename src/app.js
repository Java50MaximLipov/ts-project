"use strict";
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i));
// }
let num;
num = 12;
let str = "abcd";
str = "lmn";
let color;
color = "red";
function f1(n1, n2) {
    return n1 + n2;
}
// f1(1,"1");
function f2(array) {
    return array.reduce((res, cur) => res + cur);
}
function stringNumberAction(strNum) {
    let res;
    if (typeof strNum == "string") {
        res = strNum.length;
    }
    else {
        res = strNum * 2;
    }
    return res;
}
console.log(stringNumberAction("10"));
let ar;
ar = [1, 2, 3];
ar = ["1", "abc", "3"];
let ar1;
ar1 = [1, "a"];
let someColor;
let someComparator;
someComparator = (n1, n2) => n1 - n2;
someComparator = f1;
someComparator = f2;
const person = { id: 123, name: "Vasya" };
//# sourceMappingURL=app.js.map