// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only 
// the integer part of the result is returned.

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt1 = (x) => {
    let i = 1;
    while (i ** 2 <= x) {
        i++;       
    }
    return (i - 1);
};

const mySqrt = (x) => {
    if (x === 0) return x;
    
    let min = 0, max = x;
    while(min < max) {
        let mid = (min + max) / 2;
        squared = mid ** 2;
        if (squared === x) {
            return mid;
        } else if (Math.floor(min) === Math.floor(max)) {
            return Math.floor(mid);
        } else if (squared > x) {
            max = mid;
        } else if (squared < x) {
            min = mid;
        } 
    }
};

var mySqrt3 = function(x) {   
    let l = 0;
    let r = x;
    while(l <= r){
       let mid = parseInt((l + r) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x){
            l = mid + 1
        } else {
            r = mid - 1;
        }
    }
    return r;
};

let mySqrt4 = function(x) {
  const eq = (e) => e ** 2 - x;
  let xi = x;
  let yi = eq(xi);
  while(yi > 0.1) {
    xi -= yi / (2 * xi);
    yi = eq(xi);
  }
  return Math.floor(xi);
}
