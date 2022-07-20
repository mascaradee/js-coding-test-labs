const { log } = console;

function showCustomers(customers, targetList) {
  // customer 정보로 li 안의 p태그에  이름과 이메일을 넣는다.
  // 이름을 클릭 했을때만 이메일이 노출
  // 이름 다시 클릭하면 이메일 감춤
  for (let i = 0; i < customers.length; ++i) {
    targetList.append(document.createElement("li"));
  }
  let lis = document.querySelectorAll("li");
  for (let j = 0; j < lis.length; ++j) {
    let $p = document.createElement("p");
    $p.innerText = customers[j].name;
    lis[j].append($p);

    $p.addEventListener("click", (event) => {
      if (event.target.nextElementSibling) {
        event.target.nextElementSibling.remove();
        return;
      }

      let $p1 = document.createElement("p");
      $p1.innerText = customers[j].email;
      event.target.after($p1);
    });
  }
}

let customers = [
  { name: "John", email: "john@example.com" },
  { name: "Mary", email: "mary@example.com" },
];
showCustomers(customers, document.getElementById("customers"));

let customerParagraph = document.querySelectorAll("li > p")[0];
if (customerParagraph) {
  customerParagraph.click();
}
console.log(document.body.innerHTML);
