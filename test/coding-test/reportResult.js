const assert = require("assert");
const { log } = console;

/**다른 사람 풀이  */
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map(a => { return a.split(' ') });

  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1)
    log(counts);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1)
    }
  }
  let answer = id_list.map(a => good.get(a) || 0)
  return answer;
}



/**내 풀이 20220721  */
/**
 * id_list: 사용자 목록
 * report: 사용자 + 신고대상
 * k: 신고횟수
 */
// function solution(id_list, report, k) {

//   const set = new Set(report);
//   report = [...set];

//   // 신고대상자 뽑기
//   const reportedList = [];
//   const reportingList = [];
//   report.forEach(element => {
//     const reportList = element.split(' ');
//     reportedList.push(reportList[1]); // 신고당한사람들
//     reportingList.push(reportList[0]); // 신고자들
//   });

//   // 신고횟수 
//   const reportedCntMap = new Map();
//   reportedList.forEach(e => {
//     reportedCntMap[e] = (reportedCntMap[e] || 0) + 1; // 배열 내 중복 카운팅 !!!
//   });

//   // 정지대상자
//   const vannedNameArr = [];
//   Object.entries(reportedCntMap).map(([key, value]) => {
//     if (value >= k) {
//       vannedNameArr.push(key);
//     }
//   });

//   // 정지대상자를 신고한 사람 건수 
//   // 사용자리스트와 신고한 사람 리스트 비교해당 인덱스의 신고당한 사람을 리스트로 만든다.

//   const requestList = new Map();
//   id_list.filter((ele, i) => {
//     requestList[ele] = [];
//     let idx = reportingList.indexOf(ele);
//     while (idx != -1) {
//       requestList[ele].push(reportedList[idx]);
//       idx = reportingList.indexOf(ele, idx + 1);
//     }
//   });

//   // Map value가 정지대상자이름과 동일하면 +1
//   const answer = [];

//   Object.entries(requestList).map(([key, value]) => {
//     const stopEle = value;
//     let cnt = 0;
//     stopEle.filter(v => {
//       if (vannedNameArr.includes(v)) {
//         cnt++;
//       }
//     })
//     answer.push(cnt);
//   });
//   return answer;
// }



describe("프로그래머스- 신고 결과 받기", function () {
  it("유저별 정지ID알림 메일 받는 건수1 ", function () {
    assert.deepStrictEqual(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2), [2, 1, 1, 0]);
  });
  it("유저별 정지ID알림 메일 받는 건수2 ", function () {
    assert.deepStrictEqual(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3), [0, 0]);
  });
});
