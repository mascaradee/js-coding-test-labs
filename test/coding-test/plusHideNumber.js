const assert = require("assert");
const { log } = console;

/** 다른이 */
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

/** 20220727 */
function solution(numbers) {
  let s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = s.filter(e => !numbers.includes(e)).reduce((acc, cur) => acc + cur);
  return answer;
}


describe(" 없는 숫자 더하기", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution([1, 2, 3, 4, 6, 7, 8, 0]), 14);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution([5, 8, 4, 0, 6, 7, 9]), 6);
  });
});
