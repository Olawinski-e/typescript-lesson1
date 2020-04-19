// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Estelle",
  age: 29,
  hobbies: ["Laugh", "Thinking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
//person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Laugh"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
