const assert = require("assert");
const { log } = console;


function solution(arr) {
  let min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  return arr.length ? arr : [-1];
}


describe("프로그래머스- 제일 작은 수 제거하기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution([4, 3, 2, 1]), [4, 3, 2]);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution([10]), [-1]);
  });
  it("테스트 케이스3 ", function () {
    assert.deepStrictEqual(solution([1, 2, 3]), [2, 3]);
  });
  it("테스트 케이스4 ", function () {
    assert.deepStrictEqual(solution([1, 3, 2]), [3, 2]);
  });
});
