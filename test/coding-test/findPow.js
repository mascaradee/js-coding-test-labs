const assert = require("assert");
const { log } = console;

/** 20220728 */
function solution(n) {
  let sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1
}


describe(" 정수 제곱근 판별", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(121), 144);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(3), -1);
  });
});
