const assert = require("assert");
const { log } = console;


function solution(str) {
  let strArr = str.split('');
  let output = ''
  strArr.map((e) => output += e.charCodeAt() >= 97 ? e.toUpperCase() : e.toLowerCase())
  return output;
}


describe("문자열 출력하기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution('aBcDeFg'), 'AbCdEfG');
  });
});
