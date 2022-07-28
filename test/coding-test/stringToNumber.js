const assert = require("assert");
const { log } = console;


/**
 * 다른 이
 */
function solution(s) {
  return s / 1;
  // return +s; 혹은 이렇게 계산을 하거나 기호를 덧붙여서 숫자화 한다. 이건 별로 가시성이 없는 듯 한데 
}

/**20220726 */
function solution(s) {
  return Number(s);
}


describe(" 문자열을 정수로 바꾸기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("1234"), 1234);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("-1234"), -1234);
  });
});
