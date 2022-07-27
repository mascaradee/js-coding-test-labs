const assert = require("assert");
const { log } = console;


/**다른이 */
function solution(n) {
  // 쉬운방법
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

/** 20220727 */
function solution(n) {
  return [...String(n)].reduce((prev, curr) => prev + Number(curr), 0);
}


describe("프로그래머스- 자릿수 더하기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(123), 6);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(987), 24);
  });
});
