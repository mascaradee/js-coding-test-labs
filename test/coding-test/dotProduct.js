const assert = require("assert");
const { log } = console;

/** 20220729 */
function solution(a, b) {
  return a.reduce((acc, cur, i) => acc + cur * b[i], 0);
}


describe("내적", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution([1, 2, 3, 4], [-3, -1, 0, 2]), 3);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution([-1, 0, 1], [1, 0, -1]), -2);
  });

});
