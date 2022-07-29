const assert = require("assert");
const { log } = console;

/** 20220729 미완성 */
function solution(nums) {
  // 소수: 1과 자기 자신으로만 나눠지는것
  // 2 % 1 = 0
  // 2 % 2 = 0

  // 3 %1 = 0
  // 3 % 2 = 1
  // 3 % 3 = 0

  let cnt = 0;
  let newArr = String(nums).split(',').map((e, i) => e % i ? 0 : cnt++)
  log(cnt, newArr)

}


describe("소수만들기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution([1, 2, 3, 4]), 1);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution([1, 2, 7, 6, 4]), 4);
  });
});
