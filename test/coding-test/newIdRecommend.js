const assert = require("assert");
const { log } = console;


// /**
//  * 다른 사람
//  */
// function solution(new_id) {
//   const answer = new_id
//     .toLowerCase() // 1
//     .replace(/[^\w-_.]/g, '') // 2
//     .replace(/\.+/g, '.') // 3
//     .replace(/^\.|\.$/g, '') // 4
//     .replace(/^$/, 'a') // 5
//     .slice(0, 15).replace(/\.$/, ''); // 6
//   const len = answer.length;
//   return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }

// /** 다른 사람 풀이 2 */
// const solution = (new_id) => {
//   const id = new_id
//     .toLowerCase()
//     .replace(/[^\w\d-_.]/g, '')
//     .replace(/\.{2,}/g, '.')
//     .replace(/^\.|\.$/g, '')
//     .padEnd(1, 'a')
//     .slice(0, 15)
//     .replace(/^\.|\.$/g, '')
//   return id.padEnd(3, id[id.length - 1]) // sj: 문자열도 배열값 불러오는 것 처럼 사용할수가 있네  str[i]
// }


/**
 * 내 풀이 20220723
 */
// function solution(new_id) {

//   // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
//   let newId = new_id.toLowerCase();
//   // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
//   newId = newId.replace(/[^\w|\d|\-|\_|\.]/g, '');
//   // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
//   newId = newId.replace(/\.+/g, '.');
//   // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
//   newId = (newId.indexOf('.') === 0 || newId.lastIndexOf('.') === newId.length - 1 ? newId.replace(/\./, '') : newId);
//   // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
//   newId = newId === '' ? 'a' : newId;
//   // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//   newId = newId.substring(0, 15);
//   // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
//   newId = newId.lastIndexOf('.') === newId.length - 1 ? newId.replace(/\./, '') : newId;
//   // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
//   let forCnt = newId.length;
//   if (forCnt < 3) {
//     for (let index = 0; index < 3 - forCnt; index++) {
//       newId = newId + newId.substr(newId.length - 1, 1);
//     }
//   }
//   return newId;
// }


/**
 * 내 풀이 20220726
 */
function solution(new_id) {

  // 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  let newId = new_id.toLowerCase();
  // 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  newId = newId.replace(/[^\w|\d|\-|\_|\.]/g, '');
  // 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  newId = newId.replace(/\.+/g, '.');
  // 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  newId = newId.replace(/^\.|\.$/, '');
  // 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  newId = newId.replace(/^$/, 'a');
  // 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  newId = newId.substring(0, 15);
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  newId = newId.replace(/\.$/, '');
  // 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  let length = newId.length;
  return length < 3 ? newId + newId[length - 1].repeat(3 - length) : newId;
}




describe("프로그래머스-신규아이디추천", function () {
  it("테스트 케이스1 ", function () {
    assert.strictEqual(solution("...!@BaT#*..y.abcdefghijklm"), "bat.y.abcdefghi");
  });
  it("테스트 케이스2 ", function () {
    assert.strictEqual(solution("z-+.^."), "z--");
  });
  it("테스트 케이스3 ", function () {
    assert.strictEqual(solution("=.="), "aaa");
  });
  it("테스트 케이스4 ", function () {
    assert.strictEqual(solution("123_.def"), "123_.def");
  });
  it("테스트 케이스5 ", function () {
    assert.strictEqual(solution("abcdefghijklmn.p"), "abcdefghijklmn");
  });
  it("테스트 케이스6 ", function () {
    assert.strictEqual(solution("-_.~!@#$%^&*()=+[{]}:?,<>/"), "-__");
  });
  it("테스트 케이스7 ", function () {
    assert.strictEqual(solution(" "), "aaa");
  });
});
