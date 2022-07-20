const assert = require("assert");
const { log } = console;

/**
 * object와 property를 인자로 받아 obj 안에 prop이 존재하면 prop을 지우고 true 반환 그렇지 않으면 false 반환
 */
function removeProperty(obj, prop) {
  return obj.hasOwnProperty() ? delete obj["prop"] : false;
}

describe("Codility 알고리즘 테스트 - ABSwaps", function () {
  it("should be equal", function () {
    assert.strictEqual(solution("ccc"), -1);
    assert.strictEqual(solution("123"), -1);

    assert.strictEqual(solution("ababab"), 3);
    assert.strictEqual(solution("abbbbaa"), 4);
    assert.strictEqual(solution("baabaab"), 5);
    assert.strictEqual(solution("bbbababaaab"), 0);
    assert.strictEqual(solution("abbabb"), -1);
  });
});
