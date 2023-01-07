import DBconnect from "../../lib/db";
import User from "../../lib/Models/User";

export default async function handler(req, res) {
  //connection error
  DBconnect().catch((error) => console.error(error.message));

  const user = new User({
    userId: Date.now(),
    roll: 102,
    password: "12341243",
  });
  user.save().then(() => {
    console.log("User created");
    res.status(200).send(user);
  });
}

// data: {
//   core11C: 50,
//   core11A: 42,
//   dse3ThC: 46,
//   dse3ThA: 40,
//   dse3PrC: 12,
//   dse3PrA: 8,
//   dse4ThC: 48,
//   dse4ThA: 40,
//   dse4PrC: 10,
//   dse4PrA: 8,
// },
