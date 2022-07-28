const assert = require("assert");
const { log } = console;

/**
 * 다른 사람
 */
function length(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

/**20220725 */
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const regex = /^[0-9]+$/;
  return regex.test(s);
}


describe(" 문자열 다루기 기본", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("a234"), false);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("1234"), true);
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution(""), false);
  });
  it("테스트 케이스4 ", function () {
    assert.strictEqual(solution("abcdefghi"), false);
  });
  it("테스트 케이스5 ", function () {
    assert.strictEqual(solution("abcdef"), false);
  });
  it("테스트 케이스6 ", function () {
    assert.strictEqual(solution("12345A"), false);
  });
  it("테스트 케이스7 ", function () {
    assert.strictEqual(solution("1"), false);
  });
  it("테스트 케이스8 ", function () {
    assert.strictEqual(solution("ABcd"), false);
  });
});
