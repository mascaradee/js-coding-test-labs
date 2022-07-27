const assert = require("assert");
const { log } = console;

/**다른이 */
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}
/** 20220727 */
function solution(n) {
  let answer = [...String(n)].sort((a, b) => (a - b) * -1).reduce((acc, curr) => acc + curr);
  return Number(answer);
}


describe("프로그래머스- 정수 내림차순으로 배치하기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution(118372), 873211);
  });
  // it("테스트 케이스2 ", function () {
  //   assert.strictEqual(solution(), '');
  // });
});
