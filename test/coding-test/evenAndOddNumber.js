const assert = require("assert");
const { log } = console;

/** 다른이 */
function solution(num) {
  return num % 2 ? "Odd" : "Even";
}

/**20220726 */
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}


describe(" 짝수와 홀수", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(3), "Odd");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(4), "Even");
  });
});
