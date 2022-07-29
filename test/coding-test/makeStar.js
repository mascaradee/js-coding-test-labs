const assert = require("assert");
const { log } = console;

/** 다른이 */
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  const row = '*'.repeat(a)
  for (let i = 0; i < b; i++) {
    console.log(row)
  }
});


process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  const star = `${'*'.repeat(a)}\n`;

  console.log(star.repeat(b));
});

/** 20220729 */
function solution(data) {
  // 5 3
  let arr = data.split(' ');
  for (let i = 0; i < Number(arr[1]); i++) {
    let a = '';
    for (let j = 0; j < Number(arr[0]); j++) {
      a += '*'
    }
    log(a)
  }
}


describe("직사각형 별찍기", function () {
  it("테스트 케이스1 ", function () {
    assert.deepStrictEqual(solution('2 3'), "*****/r/n*****");
  });
  // it("테스트 케이스2 ", function () {
  //   assert.strictEqual(solution(), '');
  // });
});
