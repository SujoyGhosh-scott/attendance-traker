import User from "../../lib/Models/User";
import DBconnect from "../../lib/db";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { roll, password } = req.body;
    if (!roll || !password) {
      res.status(400).send({
        success: false,
        message: "missing params",
      });
      return;
    }
    DBconnect().catch((error) => console.error(error.message));

    try {
      const user = await User.findOne({ roll }).select("+password");
      if (!user) {
        res.status(404).send({
          success: false,
          message: "No user found",
        });
        return;
      }
      console.log("found user: ", user);

      const isMatched = await user.matchPasswords(password);

      if (!isMatched) {
        res.status(200).send({
          success: false,
          message: "Invalid credentials",
        });
        return;
      }

      res.status(201).send({
        success: true,
        token: jwt.sign({ roll: user.roll }, process.env.JWT_SECRET, {
          expiresIn: "15d",
        }),
      });
      return;
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  }
}
