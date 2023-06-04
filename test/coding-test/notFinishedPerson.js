const assert = require("assert");
const { appendFile } = require('fs');
const { log } = console;

/*다른 사람*/
function solution(participant, completion) {
  let resulet = participant.find(name => !completion[name]--,
    completion.map(name => { completion[name] = (completion[name] | 0) + 1; log(completion) })
  );
  return resulet;
}


/** 20220804 통과 못함  */
// function solution(participant, completion) {
//   let result = participant.filter(e => {
//     if (completion.indexOf(e) != -1) {
//       completion.splice(completion.indexOf(e), 1)
//     } else {
//       return e;
//     }
//   });
//   return result.toString();
// }

describe("완주하지 못한 선수", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution(["leo", "kiki", "eden"], ["eden", "kiki"]), "leo");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]), "vinko");
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]), "mislav");
  });



});
