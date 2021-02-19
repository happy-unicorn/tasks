// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], 
// then return 0.

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (num) => {
    let tmp = 0;
    const lim = (Math.pow(2, 31) - 1) / 10;
    while (num !== 0) {
        const remainder = num % 10;
        num = (num - num % 10 ) / 10;
        if ((tmp > lim || (tmp == lim && remainder > 7)) || (tmp < -lim || (tmp == -lim && remainder < -8))) {
            return 0;       
        }
        tmp = tmp * 10 + remainder;
    }
    return tmp;
};
