const { ok } = require('assert');
const assert = require("assert");
const { log } = console;

/** 20220727 미완성 */
function solution(n) {
  let decimalCnt = 0;
  for (let i = 2; i <= n; i++) {
    let checkDecimalCnt = 0;
    for (let j = 1; j <= i; j++) {
      checkDecimalCnt += i % j ? 0 : 1;
    }
    if (checkDecimalCnt == 2) {
      decimalCnt++;
    }
  }
  return decimalCnt;
}


describe(" 소수 찾기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(10), 4);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(5), 3);
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution(100), 25);
  });
});
