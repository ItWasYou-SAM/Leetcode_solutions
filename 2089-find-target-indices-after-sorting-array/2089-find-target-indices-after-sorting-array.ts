function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);

    const idx = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            idx.push(i);
        }
    }

    return idx;
};