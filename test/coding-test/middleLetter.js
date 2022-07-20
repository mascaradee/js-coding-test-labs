const assert = require("assert");
const { log } = console;

function solution(s) {

  //1 <= s <=100
  var answer = '';

  let sLen = s.length;
  // 짝수
  if(sLen % 2 == 0) {
    answer = s.substr(sLen / 2 - 1, 2); 
  } else {
    answer = s.substr(sLen / 2, 1)
  }
  return answer;

  // 홀수이면 중간 문자
  // 짝수이면 중간의 앞위 문자

}



describe("testdome 알고리즘 테스트", function () {
  it("should be equal", function () {
    assert.strictEqual(solution('qwer'), 'we');
    assert.strictEqual(solution('abcde'), 'c');
  });
});
