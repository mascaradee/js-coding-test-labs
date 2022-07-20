const { log } = console;

/**
 * @param {HTMLElement} parent The HTML element of the parent
 * @param {string} relativeName The name of relative to be searched
 * @return {HTMLElement} The HTML element of the closest relative
 */
/*
재귀함수 
하위 계층으로 몇 번 들어갈 지  정해져 있지 않으므로 
for문을 몇 번 쓸지 모르다 따라서 이때 재귀함수를 이용한다. 
*/
function closestRelative(parent, relativeName) {
  // 부모의 모든 자식을 조회한다.
  let queue = [];
  for (let ele of parent.children) {
    if (ele.tagName == relativeName.toUpperCase()) {
      return ele;
    }

    if (ele.hasChildNodes()) {
      queue.push(ele);
    }
  }
  for (let j of queue) {
    return closestRelative(j, relativeName);
  }
}

let parent = document.getElementsByTagName("James")[0];
let relative = closestRelative(parent, "Mike");
console.log(relative && relative.tagName); // prints MIKE
