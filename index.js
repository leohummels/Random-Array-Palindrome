"use strict";
function main() {
    let newArray;
    let limit;
    newArray = [];
    limit = 1000;
    for (let i = 0; i < limit; i++) {
        newArray.push(wordGen());
    }
    return checkPalindrome(newArray);
}
// generate word
function wordGen() {
    let limitA;
    let limitB;
    let a;
    let word;
    let caracteres;
    let newWord;
    caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    limitA = Math.floor(Math.random() * (5 - 3) + 3);
    limitB = Math.floor(Math.random() * (5 - 3) + 3);
    function gen() {
        word = [];
        for (let i = 0; i < limitA; i++) {
            a = caracteres.charAt(Math.floor(Math.random() * limitB));
            word.push(a);
        }
        newWord = word.join("");
        return newWord;
    }
    return gen();
}
function checkPalindrome(array) {
    let arr;
    let result;
    let finalResult;
    arr = array;
    const check = function (str) {
        if (str === str.split('').reverse().join('')) {
            return str;
        }
    };
    result = arr.map(check);
    finalResult = result.filter(Boolean);
    return finalResult;
}
