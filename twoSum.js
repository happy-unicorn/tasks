// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSumBrut = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];  
            }
        }
    }
};

const twoSumOneHash = (nums, target) => {
    const already_in_use = {};
    for (let i = 0; i < nums.length; i++) {
        const dif = target - nums[i];
        if (dif in already_in_use) {
            return [already_in_use[dif], i];
        }
        already_in_use[nums[i]] = i;
    }
};
