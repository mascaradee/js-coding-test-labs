const assert = require("assert");
const { log } = console;

/** 20220728 */
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0)
      answer += i;
  }
  return answer;
}


describe(" 약수", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(12), 28);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(5), 6);
  });
});
