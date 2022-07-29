const assert = require("assert");
const { log } = console;

/** 20200729 미완성 */
function solution(numbers) {

  let arr = [];
  numbers.sort((a, b) => a - b).reduce((acc, cur) => {
    arr.push(acc + cur);
    log(acc, cur)
    return cur
  });
  log(arr);

}

describe("두 개 뽑아서 더하기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution([2, 1, 3, 4, 1]), [2, 3, 4, 5, 6, 7]);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution([5, 0, 2, 7]), [2, 5, 7, 9, 12]);
  });

});
