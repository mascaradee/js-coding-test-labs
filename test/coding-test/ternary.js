const assert = require("assert");
const { log } = console;

/** 20220729 */
function solution(n) {

  let ternaryNum = [...n.toString(3)] // 10진수 -> 3진수으로 변환
    .reverse()
    .join('');
  let decimalNum = Number.parseInt(ternaryNum, 3); // 3진수-> 10진수로 변환
  return decimalNum;
}


describe("3진법 뒤집기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution(45), 7);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(125), 229);
  });
});
