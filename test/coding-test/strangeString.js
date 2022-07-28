const assert = require("assert");
const { log } = console;

/**20220726 아직 미완성 */
function solution(s) {


  return s.split(' ').map(e => {
    for (let i = 0; i < e.length; i++) {
      if (i % 2) {
        // 홀수
        e = e.replace(e[i], e[i].toLowerCase());
        log(e)
      } else {
        // 짝수
        e = e.replace(e[i], e[i].toUpperCase());
        log(e)
      }
    }
    return e;
  }).join(' ');
}


describe(" 이상한 문자 만들기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("try hello world"), "TrY HeLlO WoRlD");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution('aa bb'), 'Aa Bb');
  });
});
