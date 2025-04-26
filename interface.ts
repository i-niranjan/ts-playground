interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  //   startTrail(): string; same as above
  getCoupon(couponname: string, value: number): number;
}

const nero: User = {
  dbId: 22,
  email: "n@n.com",
  userId: 121,
  startTrail: () => "This is a String",
  getCoupon: (name: "Nero") => 2,
};

export {};
