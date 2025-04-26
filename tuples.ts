// const user: (string | number)[] = ["hc", 2];
let user: [string, number, boolean];

user = ["hc", 2, true];

type User = [number, string];
const newUser: User = [122, "neo@gmail.com"];

newUser[1] = "hc.com";

export {};
