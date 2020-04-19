"use strict";
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userName = "Max";
// if (typeof userInput === "string") {
//   userInput = userName;
// }
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
