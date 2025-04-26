function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}
// addTwo("5");

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("niranjan", "2", true);

let loginUser = (
  name: string,
  email: string = "niranjan@sck.com",
  isPaid: boolean = false
) => {};

let myValue = addTwo(2);
getUpper("Niranjan");
loginUser("h", "h@h.com");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

//Whenever Youre returning nothing
function consoleError(errmsg: string): void {
  console.log(errmsg);
} //void still returns undefined under the hood so its not its actually really returning nothing

//When function never gonna return = best practicces than voide
function handleError(errmsg: string): never {
  throw new console.log(errmsg);
} //but never type of functions they are not gonna execute as a normal either gonna throw a error or going to exexcute in loop

export {};
