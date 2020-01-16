// NOT ! true -> false / false -> true

// AND && true일 때만 true && true =true
// AND trud && false = false
// AND false && true = false
// AND false && false = false

// OR ||
// OR || false || true = true
// OR || true || false = true
// OR || false || false = false
const a = !((true && false) || (true && false) || !false);
// const a = !(true && false || true && false || true);
// // const a = !(false || false || true);
// // const a = !(false || true);
// // const a = !(true);
// // const a = false;

console.log(a);

// NOT > AND > OR 순으로 NOT부터 처리하고 AND 처리하고 OR이 마지막으로 처리된다!!
