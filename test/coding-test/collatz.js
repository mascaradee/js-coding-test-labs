const assert = require("assert");
const { log } = console;

/** 다른이 */
function solution(num) {
  let counter = 0;
  while (num !== 1) {
    if (counter++ === 500) return -1;
    num = num % 2 ? num * 3 + 1 : num / 2;
  }
  return counter;
}

/** 20220728 */
function solution(num) {
  // let cnt = 0;
  for (let i = 1; i < 501; i++) {
    if (num === 1) {
      return 0;
    }
    if (i === 500) {
      return -1;
    }
    num = num % 2 ? num * 3 + 1 : num / 2;
    // cnt++;
    if (num === 1) {
      return i;
    }
  }
}
// answer = num % 2 ? num * 3 + 1 : num / 2;


describe("콜라츠 추측", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(6), 8);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(16), 4);
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution(626331), -1);
  });
});
