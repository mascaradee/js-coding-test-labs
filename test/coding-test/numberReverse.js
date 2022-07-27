const assert = require("assert");
const { log } = console;


/**다른이 */
function solution(n) {
  // 문자풀이
  // return (n+"").split("").reverse().map(v => parseInt(v));

  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10); // 첫번쨰 5
    n = Math.floor(n / 10); // 첫번째 1234.5 -> 1234
  } while (n > 0);

  return arr;
}

/** 20220727 */
function solution(n) {
  return [...String(n)].reverse().map(v => Number(v));
}


describe("프로그래머스- 자연수 뒤집어 배열로 만들기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution(12345), [5, 4, 3, 2, 1]);
  });
  // it("테스트 케이스2 ", function () {
  //   assert.strictEqual(solution(), '');
  // });
});
