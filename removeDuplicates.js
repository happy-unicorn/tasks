// Given a sorted array nums, remove the duplicates in-place 
// such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must 
// do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates1 = (nums) => {
    let c = 0;
    let prev;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== prev) {
            nums[c] = nums[i]; 
            c++;
        }
        prev = nums[i];
    }
    return c;
};

const removeDuplicates2 = (nums) => {
    let prev;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === prev){
            nums.splice(i, 1);
            i--;
        }
        prev = nums[i];
    }
    return nums.length;
};

const removeDuplicates3 = (nums) => {
    if (nums.length === 0) return 0;
    
    let c = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[c]) {
            nums[++c] = nums[i]; 
        }
    }
    
    return c + 1;
};
