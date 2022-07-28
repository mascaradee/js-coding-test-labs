const assert = require("assert");
const { log } = console;

/**다른아 */
// function solution(s) {
//   return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }

/**
 * 20220726 
 */
function solution(s) {

  // p의 개수 = y의 개수 true 아니면 false
  // p, y 하나도 없으면 true
  let lowerS = s.toLowerCase();
  // if (lowerS.indexOf('p') === -1 && lowerS.indexOf('y') === -1) {
  //   return true;
  // } else {
  let pCnt = [...lowerS].filter(v => v === 'p').length;
  let yCnt = [...lowerS].filter(v => v === 'y').length;
  return pCnt === yCnt ? true : false;
  // }
}


describe(" 문자열 내 p와 y의 개수", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("pPoooyY"), true);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("Pyy"), false);
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution("abc"), true);
  });
});
