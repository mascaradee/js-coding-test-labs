const assert = require("assert");
const { log } = console;

/** 다른이 */
function solution(a, b) {
  var answer = '';
  let days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  let months = {
    29: [2],
    30: [4, 6, 9, 11],
    31: [1, 3, 5, 7, 8, 10, 12]
  }
  let sum = 0;
  for (let key in months) {
    months[key].forEach(el => {
      if (el < a) {
        sum = sum + Number(key);
      }
    })
  }
  let checkedNum = (sum + b) % 7;
  answer = days[checkedNum]
  return answer;
}


/** 20220729 */
function solution(a, b) {
  let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return day[new Date(`2016-${a}-${b}`).getDay()];
}






describe("2016년", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution(5, 24), 'TUE');
  });
  // it("테스트 케이스2 ", function () {
  //   assert.strictEqual(solution(), '');
  // });
});
