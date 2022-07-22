const assert = require("assert");
const { log } = console;

/**
 * 다른 사람
 */

function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}



// /** 내꺼 20220722 */
// function solution(s) {

//   // 영어단어, 숫자 배열과 맞는 문자는 숫자로 바꾼다. 
//   const archive = new Map();
//   archive.set('zero', 0);
//   archive.set('one', 1);
//   archive.set('two', 2);
//   archive.set('three', 3);
//   archive.set('four', 4);
//   archive.set('five', 5);
//   archive.set('six', 6);
//   archive.set('seven', 7);
//   archive.set('eight', 8);
//   archive.set('nine', 9);

//   function replaceAll(str, searchStr, replaceStr) {
//     return str.split(searchStr).join(replaceStr);
//   }
//   archive.forEach((value, key) => {
//     if (s.match(key) !== null) {
//       s = replaceAll(s, s.match(key)[0], value);
//     }
//   });

//   let answer = '';
//   answer = Number(s);
//   return answer;
// }


describe("프로그래머스- 숫자 문자열과 영단어", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("one4seveneight"), 1478);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("23four5six7"), 234567);
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution("2three45sixseven"), 234567);
  });
  it("테스트 케이스4 ", function () {
    assert.strictEqual(solution("123"), 123);
  });
  it("테스트 케이스5 ", function () {
    assert.strictEqual(solution("2three45sixsevenseven"), 2345677);
  });
});
