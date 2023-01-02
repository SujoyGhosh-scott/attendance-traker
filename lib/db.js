const mongoose = require("mongoose");

const DBconnect = async () => {
  await mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.err("DB connection error", err);
        process.exit();
      }
      console.log("DB connected!");
    }
  );
};

export default DBconnect;
