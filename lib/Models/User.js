import mongoose from "mongoose";
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  roll: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: [true, "password reuired"],
    minlength: 6,
    select: false,
  },
  lastUpdated: {
    type: Date,
    default: new Date("Jan 15 2023"),
  },
  //C -> Classes
  //A -> Attended
  data: {
    type: {
      core11C: Number,
      core11A: Number,
      dse3ThC: Number,
      dse3ThA: Number,
      dse3PrC: Number,
      dse3PrA: Number,
      dse4ThC: Number,
      dse4ThA: Number,
      dse4PrC: Number,
      dse4PrA: Number,
    },
    default: {
      core11C: 0,
      core11A: 0,
      dse3ThC: 0,
      dse3ThA: 0,
      dse3PrC: 0,
      dse3PrA: 0,
      dse4ThC: 0,
      dse4ThA: 0,
      dse4PrC: 0,
      dse4PrA: 0,
    },
  },
  entries: {
    type: [
      {
        date: Date,
        core11P: Boolean,
        core11C: Number,
        core11A: Number,
        dse3ThP: Boolean,
        dse3ThC: Number,
        dse3ThA: Number,
        dse3PrP: Boolean,
        dse3PrC: Number,
        dse3PrA: Number,
        dse4ThP: Boolean,
        dse4ThC: Number,
        dse4ThA: Number,
        dse4PrP: Number,
        dse4PrC: Number,
        dse4PrA: Number,
      },
    ],
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// module.exports = mongoose.models.User;

module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
