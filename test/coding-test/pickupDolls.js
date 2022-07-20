const assert = require("assert");
const { log } = console;

function solution(board, moves) {
  var answer = 0;

  // board 배열을 하나로 만든다.
  let queue = [];
  for(let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[i].length; ++j) {
      // log("i: " + i );
      if (board[j][i] != 0) {
        moves.map((ele) => { // 크레인 움직이기
          if (i == ele) {
            queue.push(board[j][i]);
          }
        });
      }

    }
  }

  // 이전 인덱스 값이 현재 값과 같으면 제외 아니면 넣는다. 


  return answer;
}



describe("testdome 알고리즘 테스트", function () {
  it("should be equal", function () {
    assert.strictEqual(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]), 4);
  });
});
