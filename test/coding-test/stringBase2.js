const assert = require("assert");
const { log } = console;

/**
 * 다른 사람
 */
// function s(n) {
//   const waterMelon = n => {
//     return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
//   }
// }

function solution(n) {
  const waterMelon = n => "수박".repeat(n).slice(0, n);
  return waterMelon(n);
}


// /**
//  * 20220725
//  * @param {*} n 
//  * @returns 
//  */
// function solution(n) {
//   let arr = ['수', '박']
//   let answer = '';

//   for (let i = 0; i < n; ++i) {
//     answer = answer.concat(arr[i % 2]);
//   }
//   return answer;

// }


describe(" 수박수박수박수박수박수?", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(3), "수박수");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(4), "수박수박");
  });
});
