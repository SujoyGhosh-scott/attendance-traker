import User from "../../lib/Models/User";
import DBconnect from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, roll, password } = req.body;
    if (!roll || !password) {
      res.status(400).send({
        success: false,
        message: "missing params",
      });
      return;
    }
    DBconnect().catch((error) => console.error(error.message));

    try {
      const user = new User({
        userId: Date.now(),
        name,
        roll,
        password,
      });

      await user.save();

      console.log("user creaed: ", user);

      res.status(201).send({
        success: true,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  }
}
