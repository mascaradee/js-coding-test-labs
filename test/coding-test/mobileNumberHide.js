const assert = require("assert");
const { log } = console;

/**다른이 */
function solution(s) {
  return s.replace(/\d(?=\d{4})/g, "*"); // ?=\d{4} 뒤에서부터 숫자 4를 제외한 부분 => 뒤에서부터 숫자 4개 뺜 나머지
}

/** 20220727 */
// function solution(phone_number) {
//   let len = phone_number.length;
//   return phone_number.substring(0, len - 4).replace(/\d/g, '*') + phone_number.substring(len - 4)
// }


describe("프로그래머스- 핸드폰 번호 가리기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("01033334444"), "*******4444");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("027778888"), "*****8888");
  });
});
