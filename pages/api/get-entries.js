import User from "../../lib/Models/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
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
      console.log("finding: ", roll);
      const user = await User.findOne({ roll });
      if (!user) {
        res.status(404).send({
          success: false,
          message: "no user found",
        });
        return;
      }
      console.log("\n\nfound user: ", user);

      res.status(200).send({
        success: true,
        entries: user.entries,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  }
}
