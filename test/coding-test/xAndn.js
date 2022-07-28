const assert = require("assert");
const { log } = console;


/**다른이 */
function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
/** 20220728 */
function solution(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i)
  }
  return arr;
}


describe(" x와  n 찾기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution(2, 5), [2, 4, 6, 8, 10]);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution(4, 3), [4, 8, 12]);
  });
  it("테스트 케이스3 ", function () {
    assert.deepStrictEqual(solution(-4, 2), [-4, -8]);
  });
});
