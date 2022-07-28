const assert = require("assert");
const { log } = console;



/**
 * 다른 사람 거
 */
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
/**
 * 20220726
 */

function solution(strings, n) {

  let mappedArr = strings.sort().map((val) => {
    return { order: val[n], val: val }
  });

  mappedArr.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
    return 0;
  });

  let anwser = [];
  mappedArr.map(val => {
    anwser.push(val.val);
  });
  return anwser;
}


describe(" 코딩테스트제목", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution(["sun", "bed", "car"], 1), ["car", "bed", "sun"]);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution(["abce", "abcd", "cdx"], 2), ["abcd", "abce", "cdx"]);
  });

});
