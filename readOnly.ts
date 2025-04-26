type User = {
  readonly _id: string;
  name: string;
  cardDetails?: number; //Optional Operator
};

let myUser: User = {
  _id: "12345",
  name: "niranjan",
};

// myUser._id = 'niranjan'  - Not gonna work becuase its a Read Only
export {};
