type Combinable = number | string;
type ConversionDscriptor = "asnumber" | "astext";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDscriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "asnumber"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultConversion === "asnumber") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(30, 26, "asnumber");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "asnumber");
console.log(combinedStringAges);

const combinedNames = combine("Nathan", "Loick", "astext");
console.log(combinedNames);
