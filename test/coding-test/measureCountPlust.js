const assert = require("assert");
const { log } = console;

/** 다른이 */
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

/** 20220729 */
function solution(left, right) {

  let sum = 0;
  for (let i = left; i <= right; i++) {
    let measerCnt = 0;
    for (let j = 1; j <= i; j++) {
      i % j ? 0 : measerCnt++;
    }
    measerCnt % 2 ? sum -= i : sum += i;
  }
  return sum;
}


describe("약수의 개수와 덧셈", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(13, 17), 43);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(24, 27), 52);
  });
});
