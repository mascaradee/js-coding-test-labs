const assert = require("assert");
const { log } = console;

/**다른 사람 풀이 참고해서 다시 20220720  */

function solution(num1, num2, max) {
  let sum = 0;
  for (let index = 1; index < max; index++) {
    if (index % 3 == 0 || index % 5 == 0) {
      sum += index;
    }
  }
  return sum;
}

// /** 내 풀이 20220720 */
// /**
//  * num: 배수
//  * max: 최대값
//  */
// function multy(num, max) {
//   let arr = [];
//   for (let index = 1; index < Math.floor(max / num) + 1; index++) {
//     if (num * index < max) {
//       arr.push(num * index);
//     }
//   }
//   return arr;
// }

// function solution(num1, num2, max) {

//   let arr1 = multy(num1, max);
//   let arr2 = multy(num2, max);
//   let arr = [...arr1, ...arr2];
//   let set = new Set(arr);
//   let resultArr = [...set];
//   log(resultArr);

//   let sum = 0;
//   resultArr.map(value => sum += value);
//   return sum;

// }

describe("코딩도장- Multiples of 3 and 5", function () {
  it("gets sum of all the multiples of 3 or 5 below 10", function () {
    assert.strictEqual(solution(3, 5, 10), 23);
  });
  it("gets sum of all the multiples of 3 or 5 below 1000", function () {
    assert.strictEqual(solution(3, 5, 1000), 233168);
  });
});
