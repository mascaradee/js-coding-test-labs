const assert = require("assert");
const { log } = console;


/** 20220729 */
function solution(sizes) {

  let x = [];
  let y = [];
  sizes.map(e => e.sort((a, b) => a - b)).map(e => {
    x.push(e[0]);
    y.push(e[1]);
    return;
  });
  return Math.max(...x) * Math.max(...y);
}


describe("최소직사각형", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution([[60, 50], [30, 70], [60, 30], [80, 40]]), 4000);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]), 120);
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]), 133);
  });
});
