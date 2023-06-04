const assert = require("assert");
const { log } = console;


function solution(n) {

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}


describe(" 코딩테스트제목", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(12), 28);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(5), 6);
  });
});
