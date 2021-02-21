// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the 
// multiples of five output “Buzz”. For numbers which are multiples of both three and five 
// output “FizzBuzz”.
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz1 = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result.push('FizzBuzz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else {
            result.push(`${i}`);
        }
    }
    return result;
};

const fizzBuzz2 = (n) => {
    let result = '';
    for (let i = 1; i <= n; i++) {
        let tmp = ' ';
        if (i % 3 === 0) {
            tmp += 'Fizz';
        }
        if (i % 5 === 0) {
            tmp += 'Buzz';
        }
        if (tmp === ' ') {
            tmp += `${i}`;
        }
        result += tmp; 
    }
    return result.trim().split(' ');
};

const fizzBuzz3 = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        let tmp = '';
        if (i % 3 === 0) {
            tmp += 'Fizz';
        }
        if (i % 5 === 0) {
            tmp += 'Buzz';
        }
        if (tmp === '') {
            tmp += `${i}`;
        }
        result.push(tmp); 
    }
    return result;
};

const fizzBuzz4 = (n) => {
    const result = [];
    const mapper = new Map([
        [3, 'Fizz'],
        [5, 'Buzz']
    ]);
    for (let i = 1; i <= n; i++) {
        let tmp = '';
        
        for (let key of mapper.keys()) {
            if (i % key === 0) {
                tmp += mapper.get(key);
            }
        }
        
        if (tmp === '') {
            tmp += `${i}`;
        }
        result.push(tmp); 
    }
    return result;
};

const fizzBuzz5 = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result.push('FizzBuzz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
};
