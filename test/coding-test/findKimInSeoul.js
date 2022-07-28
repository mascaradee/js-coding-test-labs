const assert = require("assert");
const { log } = console;


/**다른 사람 */
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

/**20220726 */
function solution(seoul) {
  let answer = '';
  seoul.find((v, i) => {
    if (v === 'Kim') {
      answer = `김서방은 ${i}에 있다`;
    }
  })
  return answer;
}


describe(" 코딩테스트제목", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(["Jane", "Kim"]), "김서방은 1에 있다");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(["Kim"]), "김서방은 0에 있다");
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution(["Jane", "abcdefghijklmno", "Kim"]), "김서방은 2에 있다");
  });
});
