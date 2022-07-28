const assert = require("assert");
const { log } = console;

/** 20220727 */
function solution(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}


describe(" 코딩테스트제목", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution([1, 2, 3, 4]), 2.5);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution([5, 5]), 5);
  });
});
