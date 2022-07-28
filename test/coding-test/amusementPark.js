const assert = require("assert");
const { log } = console;

function solution(price, money, count) {
  let sum = 0;
  // let temp =0;
  // for(let i=1; i < count+1; ++i) {
  //   temp += i;
  //   if (count >= 25000) {
  //     break;
  //   }
  // }
  // sum  = temp * price;
  // 가우스 공식 : for문도 속도가 빠르다구?
  sum = (count * (count + 1) / 2) * price
  return sum - money > 0 ? sum - money : 0

}



describe(" 알고리즘 테스트", function () {
  it("should be equal", function () {
    assert.strictEqual(solution(3, 20, 4), 10);
    assert.strictEqual(solution(2, 20, 5), 10);
    assert.strictEqual(solution(10, 100000, 10), 0);
    // assert.strictEqual(solution(10,100000,10000), 0);
  });
});
