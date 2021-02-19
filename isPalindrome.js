// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome1 = (x) => {
    return x == x.toString().split("").reverse().join("");
};

const isPalindrome2 = (num) => {
    if (num < 0) return false;
    const number = num;
    let tmp = 0;
    while (num !== 0) {
        tmp = tmp * 10 + num % 10;
        num = (num - num % 10 ) / 10;
    }
    return tmp === number;
}

const isPalindrome3 = (num) => {
    if (num < 0 || (num % 10 == 0 && num != 0)) return false;
    let tmp = 0;
    while (num > tmp) {
        tmp = tmp * 10 + num % 10;
        num = (num - num % 10 ) / 10;
    }
    return tmp === num || (tmp - tmp % 10 ) / 10 === num;
}
