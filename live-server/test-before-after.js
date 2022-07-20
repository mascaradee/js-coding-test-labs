const { log } = console;

function setup() {
  // 업, 다운 버튼에 이벤트 리스너 연결
  // 홀수 = 업
  // 짝수 = 다운
  let upButtons = document.querySelectorAll("button:nth-child(odd)");
  let downButtons = document.querySelectorAll("button:nth-child(even)");
  let $ol = document.querySelector("ol");
  for (let i = 0; i < upButtons.length; ++i) {
    upButtons[i].addEventListener("click", (event) => {
      // 업을 누르면 위 항목 앞으로 덧붙임
      let $li = event.target.closest("li");
      $li.previousElementSibling && $li.previousElementSibling.before($li);
    });
  }
  for (let i = 0; i < downButtons.length; ++i) {
    downButtons[i].addEventListener("click", (event) => {
      // 다운을 누르면 아래 항목 취고 덧붙임
      let $li = event.target.closest("li");
      $li.nextElementSibling && $li.nextElementSibling.after($li);
    });
  }
}

// Example case

setup();
document.getElementsByTagName("button")[2].click();

log(document.body.innerHTML);
