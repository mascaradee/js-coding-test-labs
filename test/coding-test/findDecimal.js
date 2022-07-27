const { ok } = require('assert');
const assert = require("assert");
const { log } = console;

/** 20220727 미완성 */
function solution(n) {

  let cnt = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (j !== 2 && j % 2 === 0) {
        break;
      }
      if (j !== 3 && j % 3 === 0) {
        break;
      }
      if (j !== 5 && j % 5 === 0) {
        break;
      }
      if (j !== 5 && j % 5 === 0) {
        break;
      }
      if (i === j) {
        cnt++;
      }

      log(n, i, cnt)
    }
  }



  // 1을 제외한 자기 자신으로만 나눠서 0인 수 = 소수
  //   let cnt = 0;
  //   for (let i = 2; i <= n; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       if (j !== 1 && j !== i && i % j === 0) {
  //         break;
  //       }
  //       if (i === j) {
  //         cnt++;
  //       }
  //     }
  //   }
  return cnt;
}


describe("프로그래머스- 소수 찾기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(10), 4);
  });
  // it("테스트 케이스2 ", function () {
  //   assert.strictEqual(solution(5), 3);
  // });
  // it("테스트 케이스3 ", function () {
  //   assert.strictEqual(solution(100), 25);
  // });
});
