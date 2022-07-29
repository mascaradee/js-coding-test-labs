const assert = require("assert");
const { resourceLimits } = require('worker_threads');
const { log } = console;


/** 20220729 미완성 */
function solution(numbers) {

  let result = new Set();
  numbers.sort((a, b) => a - b);
  let temp = [...numbers];

  for (let i = 0; i < numbers.length; i++) {
    let newArr = temp.slice(1);
    for (let j = 0; j < newArr.length; j++) {
      result.add(numbers[i] + newArr[j]);
    }
    temp = [...newArr];
  }
  return [...result];
  //1 1234
  //1 234
  //2 34
  //3 4 
  //4 0

}


describe("두 개 뽑아서 더하기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution([2, 1, 3, 4, 1]), [2, 3, 4, 5, 6, 7]);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution([5, 0, 2, 7]), [2, 5, 7, 9, 12]);
  });

});
