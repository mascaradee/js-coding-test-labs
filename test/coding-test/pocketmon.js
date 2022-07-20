const assert = require("assert");
const { log } = console;

function solution(nums) {
  let half = nums.length / 2
  nums.sort((a, b) => {
    return a-b
  })
  let cnt = 0;
  for(let i=0; i < nums.length; ++i){
    if(i == nums.length) {
      return;
    }
    if (nums[i] != nums[i+1]) {
      cnt++;
    }
    if (cnt >= half) {
      break;
    }
  }
  return cnt > half ? half : cnt;
}

describe("testdome 알고리즘 테스트", function () {
  it("should be equal", function () {
    assert.deepStrictEqual(solution([3,1,2,3]), 2);
    assert.deepStrictEqual(solution([3,3,3,2,2,4]), 3);
    assert.deepStrictEqual(solution([3,3,3,2,2,2]), 2);
    assert.deepStrictEqual(solution([1,2,3,4,5,6,7,8]), 4);
    assert.deepStrictEqual(solution([1,1,1,1,1,1,1,1]), 1);
    assert.deepStrictEqual(solution([1,1]), 1);

  });
});
