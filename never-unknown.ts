// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userName = "Max";
// if (typeof userInput === "string") {
//   userInput = userName;
// }

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
