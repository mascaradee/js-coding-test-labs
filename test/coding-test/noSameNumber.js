const assert = require("assert");
const { log } = console;



/**다른이 */
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

/**20220726 */
function solution(arr) {
  let newArr = [];
  let temp;
  arr.map((value) => {
    if (temp !== value) {
      newArr.push(value);
      temp = value;
    }
  });
  return newArr;
}


describe(" 같은 숫자는 싫어", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution([1, 1, 3, 3, 0, 1, 1]), [1, 3, 0, 1]);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution([4, 4, 4, 3, 3]), [4, 3]);
  });
  it("테스트 케이스3 ", function () {
    assert.deepStrictEqual(solution([0, 0]), [0]);
  });
});
