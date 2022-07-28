const assert = require("assert");
const { log } = console;

/** 20220728 */
function solution(s, n) {
  let u = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 26
  let l = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let uIndex = u.indexOf(s[i]);
    let lIndex = l.indexOf(s[i]);
    if (uIndex !== -1) {
      answer += uIndex + n > 25 ? u[uIndex + n - 26] : u[uIndex + n];
    } else if (lIndex !== -1) {
      answer += lIndex + n > 25 ? l[lIndex + n - 26] : l[lIndex + n];
    } else {
      answer += s[i];
    }
  }
  return answer;
}


describe(" 카이사르 암호", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("AB", 1), "BC");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("z", 1), "a");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("a B z", 4), "e F d");
  });
});
