import User from "../../lib/Models/User";
import jwt from "jsonwebtoken";
import moment from "moment";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { date, updatedValue } = req.body;
    if (!date) {
      res.status(400).send({
        success: false,
        message: "date not provided",
      });
      return;
    }

    //console.log("token: ", req.headers.authorization.substring(7));
    let token = req.headers.authorization.substring(7);

    if (!token) {
      res.status(400).send({
        success: false,
        message: "Token missing",
      });
      return;
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verify: ", verify);

    const { roll } = verify;

    try {
      const user = await User.findOne({ roll });
      if (!user) {
        res.status(404).send({
          success: false,
          message: "no user found",
        });
        return;
      }
      console.log("\n\nfound user");

      const entryDate = new Date(date);
      console.log("entry date: ", entryDate);

      for (let i = 0; i < user.entries.length; i++) {
        if (
          moment(user.entries[i].date).format("DD/MM/YYYY") ===
          moment(entryDate).format("DD/MM/YYYY")
        ) {
          console.log("found date: ", user.entries[i]);
          user.entries[i] = updatedValue;
          break;
        }
      }

      console.log("updated entries: ", user.entries);

      //saving changes
      await user.save();

      res.status(200).send({
        success: true,
        entries: user.entries,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
