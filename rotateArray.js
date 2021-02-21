// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Follow up:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate1 = (nums, k) => {
    const delta = k % nums.length;
    for (let i = 0; i < delta; i++) {
        let tmp, previous = nums[nums.length - 1]
        for (let j = 0; j < nums.length; j++) {
            tmp = nums[j]
            nums[j] = previous; 
            previous = tmp;
        }
    }
};

const rotate2 = (nums, k) => {
    const tmp = [];
    for (let i = 0; i < nums.length; i++) {
        tmp[(i + k) % nums.length] = nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = tmp[i];   
    }
};

const rotate3 = (nums, k) => {
    k %= nums.length;
    let count = 0;
    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[start];
        do {
            const next = (current + k) % nums.length;
            const tmp = nums[next];
            nums[next] = prev;
            prev = tmp;
            current = next;
            count++; 
        } while (start !== current);   
    }
};

const reverse = (nums, start, end) => {
    while (start < end) {
        const tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--;
    }
};

const rotate4 = (nums, k) => {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
