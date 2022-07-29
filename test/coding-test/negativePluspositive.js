const assert = require("assert");
const { log } = console;


/** 다른이 */
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
/** 20220729 */
function solution(absolutes, signs) {

  signs = signs.map(v => v ? '+' : '-');
  return absolutes.map((v, i) => signs[i] + v).reduce((acc, cur) => acc + Number(cur), 0);

}


describe("음양 더하기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution([4, 7, 12], [true, false, true]), 9);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution([1, 2, 3], [false, false, true]), 0);
  });

});
