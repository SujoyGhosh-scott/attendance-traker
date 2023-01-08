import DBconnect from "../../lib/db";
import User from "../../lib/Models/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    //connection error
    DBconnect().catch((error) => console.error(error.message));

    //console.log("token: ", req.headers.authorization.substring(7));
    let token = req.headers.authorization.substring(7);

    if (!token) {
      res.status(400).send({
        success: false,
        error: "Token missing",
      });
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verify: ", verify);

    const { roll } = verify;

    try {
      const user = await User.findOne({ roll });
      if (!user) {
        res.status(404).send({
          success: false,
          error: "not found",
        });
        return;
      }

      res.status(200).send({
        success: true,
        user,
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        error: err.message,
      });
    }
  }
}
