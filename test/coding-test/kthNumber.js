const assert = require("assert");


/**다른이 */
function solution(array, commands) {
  var answer = [];

  answer = commands.map(a => { // sj: map을 이용하면 별도  push를 할 필요가 없네 내부에서 해 주니까
    return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
  })
  return answer;
}

/** 20220728 */
function solution(array, commands) {

  let answer = [];
  commands.forEach((element) => {
    answer.push(array.slice(element[0] - 1, element[1]).sort((a, b) => a - b)[element[2] - 1]);
  });
  return answer;
}




describe(" K번째수", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]), [5, 6, 3]);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution([1, 2, 10], [[1, 1, 1], [2, 3, 1]]), [1, 2]);
  });


});
