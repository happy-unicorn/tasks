// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome1 = (sequence) => {
    const matches = sequence.toLowerCase().match(/[a-zA-Z0-9]/g);
    return matches && matches.join("") == matches.reverse().join("");
};

const isPalindrome2 = (sequence) => {
    let matches = sequence.toLowerCase().match(/[a-zA-Z0-9]/g);
    if (matches) {
        matches = matches.join("");
        for (let left = 0, right = matches.length - 1; left <= right; left++, right--) {
            if(matches[left] != matches[right]) return false;
        }
        return true;   
    }
    return true;
};

const isPalindrome3 = (s) => {
    let sentence = s.replace (/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0, right = sentence.length - 1; 
    while (left < right){
        if(sentence[left] !== sentence[right]){
            return false; 
        }
        left++; 
        right--;
    }
    
    return true 
};
