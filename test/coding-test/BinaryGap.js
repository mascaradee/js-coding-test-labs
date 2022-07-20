const assert = require("assert");
const { log } = console;

/**
 * @param {number} n
 */
function solution(n) {
  let result = 0;
  let b = n.toString(2);

  // 1001
  let cnt = 0;
  for (let i of b) {
    if (i == 0) {
      ++cnt;
    } else {
      result = result > cnt ? result : cnt;
      cnt = 0;
    }
  }

  return result;
}

describe("Codility 알고리즘 테스트 - BinaryGap", function () {
  it("should be equal", function () {
    assert.strictEqual(solution(9), 2);
    assert.strictEqual(solution(529), 4);
    assert.strictEqual(solution(20), 1);
    assert.strictEqual(solution(15), 0);
    assert.strictEqual(solution(32), 0);
    assert.strictEqual(solution(1041), 5);
  });
});
