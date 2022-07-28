const assert = require("assert");
const { log } = console;


/**
 * 다른이
 */

function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

/** 20220727 */
function solution(n) {

  // let answer = 0;
  for (let index = 2; index < n; index++) {
    if (n % index === 1) {
      // answer = index;
      // break;
      return index;
    }
  }
  // return answer;
}


describe(" 나머지가 1이 되는 수 찾기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(10), 3);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(12), 11);
  });
});
