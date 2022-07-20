const assert = require("assert");
const { log } = console;

/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
  // Your code goes here

  // 2개 숫자를 뽑아 sum 과 맞춘다.
  // 없으면  null 반환

  let r = [];
  mainloop: for (let i = 0; i < numbers.length - 1; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      if (numbers[i] + numbers[j] == 10) {
        r.push(i);
        r.push(j);
        break mainloop;
      }
    }
  }
  return !r.length ? null : r;
}

// const indices = findTwoSum([3, 1, 5, 7, 5, 9], 10);
// console.log(indices);

describe("testdome 알고리즘 테스트", function () {
  it("should be equal", function () {
    assert.deepStrictEqual(findTwoSum([3, 1, 5, 7, 5, 9], 10), [0, 3]);
    assert.deepStrictEqual(findTwoSum([3, 1, 5, 7, 5, 9], 10), [0, 3]);
  });
});
