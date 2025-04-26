const User = {
  name: "hitesh",
  email: "info@hoho.com",
  isActive: true,
};

// function createUser({ name, email: string, isPaid: boolean }): string {
//   return "hui hui";
// }
function createUser({ name, email: string, isPaid: boolean }) {}

// createUser({ name: "hitesh", isPaid: "true", email: "h@h.com" });

let newUser = { name: "hitesh", isPaid: "true", email: "h@h.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

type User = {
  _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

function newUser1(user: User) {}
newUser1({ _id: "", name: "", email: "", isActive: true });

export {};
