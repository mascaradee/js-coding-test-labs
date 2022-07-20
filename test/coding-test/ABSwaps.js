const assert = require("assert");
const { log } = console;

/**
 * @param {string} str
 */
function solution(str) {
  if (isFinite(str)) {
    return -1;
  }
  if (str.indexOf("a") == -1 || str.indexOf("b") == -1) {
    return -1;
  }

  // 'a' 혹은 'b'가 세 개 미만이면
  if (
    str.replace(/[^a]/g, "").length < 3 ||
    str.replace(/[^b]/g, "").length < 3
  ) {
    return -1;
  }

  // 'a'와 'b'로만 구성되지 않은 문자열이면
  // if () {
  // return -1;
  // }

  // 'aaa' 와 'bbb'가 있으면
  if (str.indexOf("aaa") != -1 && str.indexOf("bbb") != -1) {
    return 0;
  }

  let forwardSearchTimes = 0;
  let backwardSearchTimes = 0;

  // 찾을 대상은 b로 고정00

  let arr1 = str.split("");
  let arr2 = str.split("").reverse();

  forwardSearchTimes = fn(arr1);
  backwardSearchTimes = fn(arr2);

  // 전위 검색 (앞에서부터 b가 있는지 살핀다.)
  // 후위 검색 (위에서 뒤집은 배열을 넣어서 검색할거니까 이건 불필요)
  function fn(arr) {
    let times = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (i == arr.length - 1) {
        return;
      }
      if (arr[i] == "b") {
        continue;
      } else {
        // 바로 다음 인덱스가 b인 경우만  치환
        if (arr[i + 1] == "b") {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          times++;
        } else {
          // 그렇지 않으면 다음 b인 인덱스를 찾아서 바로 전 인덱스랑 치환
          let nextB = arr.join("").indexOf("b", i + 1);
          if (nextB != -1) {
            for (let ii = nextB; ii > i; ii--) {
              let temp = arr[ii];
              arr[ii] = arr[ii - 1];
              arr[ii - 1] = temp;
              times++;
            }
          }
        }
      }
    }
    return times;
  }

  // times 두 개 비교
  // 작은거 반환
  return backwardSearchTimes > forwardSearchTimes
    ? forwardSearchTimes
    : backwardSearchTimes;
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
