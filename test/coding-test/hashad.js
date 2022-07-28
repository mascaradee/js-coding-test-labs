const assert = require("assert");
const { log } = console;


function solution(x) {
  // 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수
  return !(x % (String(x).split('').reduce((acu, cur) => acu + Number(cur), 0)));
}


describe(" 하샤드 수", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(18), true);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(10), true);
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution(12), true);
  });
  it("테스트 케이스4 ", function () {
    assert.strictEqual(solution(11), false);
  });

});
