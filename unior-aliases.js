"use strict";
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "asnumber") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultConversion === "asnumber") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
var combinedAges = combine(30, 26, "asnumber");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "asnumber");
console.log(combinedStringAges);
var combinedNames = combine("Nathan", "Loick", "astext");
console.log(combinedNames);
