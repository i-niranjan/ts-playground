let score: string | number = 33;

score = "nero";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase(); //Assuring the TS that this is gonna be the String
  }
}

const data2: (number | string)[] = [1, 2, 4, 5, "6"];

export {};
