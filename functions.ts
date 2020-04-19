function added(n1: number, n2: number): number {
  return n1 + n2;
}

//console.log(added(3, 4));

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(added(5, 8));

//console.log("Result: " + added(5, 3));

// let combineValues: (a: number, b: number) => number;

// combineValues = added;

//combineValues = printResult;

// console.log(combineValues(3, 3));

// let someValue: undefined

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
