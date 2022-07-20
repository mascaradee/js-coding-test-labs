const assert = require("assert");
const { log } = console;

function multiply(num) {
  if (isFinite(num)) {
    let r = num * 2;
    // if (r >= 10) {
    //   r--;
    // }
    return r;
  }
  return NaN;
}

describe("모카 사용법 씨앰뽈", function () {
  it("should be true", function () {
    assert.ok(multiply(2) === 4);
    assert.ok(multiply(3) === 6);
    assert.ok(multiply(4) === 8);
    assert.ok(multiply(5) === 10);
  });

  it("should be equal", function () {
    assert.strictEqual(multiply(10), 20);
    assert.strictEqual(multiply(15), 30);
    assert.strictEqual(multiply(20), 40);
  });
});

describe("assert deep strict equality testing", () => {
  it("should be deep equal", () => {
    let arr = [1, 2, 3];
    assert.deepStrictEqual(arr, [1, 2, 3]);
    assert.notStrictEqual(arr, [1, 2, 3]);
  });
});

// TODO
