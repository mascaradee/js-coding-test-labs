let n = 0;

// fn() {
//   return 1
// }

// fn2() {
//   return 2
// }

// let result = n == 0 ? 1 : 2;
// let result = n == -1 ? fn() : fn2();

let result;

n == 1 ? (result = 1) : (result = 2);

result = n == 1 ? 1 : 2;

n == 0 && (result = 3);

console.log(result);
