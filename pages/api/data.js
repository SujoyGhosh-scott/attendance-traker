import DBconnect from "../../lib/db";
import User from "../../lib/Models/User";

export default async function handler(req, res) {
  if (req.method === "POST") {
    //connection error
    DBconnect().catch((error) => console.error(error.message));

    const { roll } = req.body;
    if (!roll) {
      res.status(400).send({
        success: false,
        error: "Roll missing",
      });
    }

    //verify token

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
