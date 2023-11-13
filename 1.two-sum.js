const nums = [2, 7, 11, 15];
const target = 9;

// const nums = [3,2,4];
// const target = 6;

// const nums = [3,3];
// const target = 6;

function twoSum(nums, target) {
    let a,b;
    for (let i = 0; i < nums.length; i++) {
        const expectedNum = target - nums[i];
        for(let j=i+1;j<nums.length;j++){
            if(expectedNum==nums[j]){
                a=i
                b=j
            }
        }
    }
    return [a,b]
}

const result = twoSum(nums, target);
console.log(result);


