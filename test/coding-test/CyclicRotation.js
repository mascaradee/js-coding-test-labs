const assert = require("assert");
const { log } = console;

/**
 * @param {Array} arr
 * @param {number} n
 */
function solution(arr, n) {
  if (!arr.length) {
    return arr;
  }
  for (let i = 0; i < n; ++i) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}

describe("Codility 알고리즘 테스트", function () {
  it("should be equal", function () {
    assert.deepStrictEqual(solution([3, 8, 9, 7, 6], 1), [6, 3, 8, 9, 7]);
    assert.deepStrictEqual(solution([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);
    assert.deepStrictEqual(solution([0, 0, 0], 1), [0, 0, 0]);
    assert.deepStrictEqual(solution([1, 2, 3, 4], 4), [1, 2, 3, 4]);
    assert.deepStrictEqual(solution([], 1), []);
  });
});
