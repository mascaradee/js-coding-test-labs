const assert = require("assert");
const { log } = console;


/** 다른이 */
function solution(price, money, count) {
  const tmp = price * count * (count + 1) / 2 - money;
  // price * (count + 1) : 12의 다음값 15 -> 3 * (4+1)로 계산한 값
  // count / 2 : 4개 / 2
  // (price * (count + 1)) * (count / 2) => 12 다음값 * 전체개수 / 2
  return tmp > 0 ? tmp : 0;
}
/** 가우스 공식 
 * 
 * 1 ~ 100 합
 * 
 * (100 + 1) * 100 / 2 = 101 * 50 = 5050
 * ---        ---
 * 100 다음값  전체개수 / 2
*/

/** 20220729 */
function solution(price, money, count) {

  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  // return money - sum < 0 ? Math.abs(money - sum) : 0;
  return money > sum ? 0 : sum - money;
}


describe("부족한 금액", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution(3, 20, 4), 10);
  });
  it("테스트 케이스2 ", function () {
    assert.deepStrictEqual(solution(1, 20, 4), 0);
  });
});
