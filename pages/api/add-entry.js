//import DBconnect from "../../lib/db";
import User from "../../lib/Models/User";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    //DBconnect().catch((error) => console.error(error.message));

    const {
      date,
      core11C,
      core11present,
      dse3thC,
      dse3thPresent,
      dse3prC,
      dse3PrPresent,
      dse4thC,
      dse4thPresent,
      dse4prC,
      dse4PrPresent,
    } = req.body;
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
        error: "Token missing",
      });
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verify: ", verify);

    const { roll } = verify;

    const updateRecord = (
      data,
      present,
      classesCount,
      totalClasses,
      attendedClasses
    ) => {
      if (present) {
        data[`${totalClasses}`] += classesCount;
        data[`${attendedClasses}`] += classesCount;
      } else {
        data[`${totalClasses}`] += classesCount;
      }
      return data;
    };

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
      let newData = user.data;

      newData = updateRecord(
        newData,
        core11present,
        core11C,
        "core11C",
        "core11A"
      );

      newData = updateRecord(
        newData,
        dse3thPresent,
        dse3thC,
        "dse3ThC",
        "dse3ThA"
      );

      newData = updateRecord(
        newData,
        dse3PrPresent,
        dse3prC,
        "dse3PrC",
        "dse3PrA"
      );

      newData = updateRecord(
        newData,
        dse4thPresent,
        dse4thC,
        "dse4ThC",
        "dse4ThA"
      );

      newData = updateRecord(
        newData,
        dse4PrPresent,
        dse4prC,
        "dse4PrC",
        "dse4PrA"
      );

      console.log("final data: ", newData);

      //making changes
      user.data = newData;
      user.lastUpdated = date;
      user.entries = [
        ...user.entries,
        {
          date,
          core11P: core11present,
          core11C: core11C,
          dse3ThP: dse3thPresent,
          dse3ThC: dse3thC,
          dse3PrP: dse3PrPresent,
          dse3PrC: dse3prC,
          dse4ThP: dse4thPresent,
          dse4ThC: dse4thC,
          dse4PrP: dse4PrPresent,
          dse4PrC: dse4prC,
        },
      ];

      //saving changes
      user.save();

      res.status(200).send({
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  }
}
