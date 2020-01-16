// 조건문
// if
const a = 1;
if (a + 1 === 2) {
  const a = 2;
  console.log("if문 안의 a값은" + a);
}
console.log("if문 밖의 a값은" + a);


const a = 10;
if (a > 15) {
  console.log("a가 15보다 큽니다");
} else {
  console.log("a가 15보다 작습니다.");
}

const a = 13;

if (a === 5) {
  console.log("5 입니다.");
} else if (a === 10) {
  console.log("10 입니다.");
} else if (a === 7) {
  console.log("7 입니다.");
} else {
  console.log("5도 아니고 10도 아니고 7도 아닙니다.");
}
