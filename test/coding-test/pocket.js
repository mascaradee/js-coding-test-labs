const assert = require("assert");
const { log } = console;


function solution(nums) {
  const pocketmonRange = new Set(nums).size;
  const pickableNumber = nums.length / 2;
  return pocketmonRange < pickableNumber ? pocketmonRange : pickableNumber;
}


describe(" 코딩테스트제목", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution([3, 1, 2, 3]), 2);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution([3, 3, 3, 2, 2, 4]), 3);
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution([3, 3, 3, 2, 2, 2]), 2);
  });
});
