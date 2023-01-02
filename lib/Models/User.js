import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
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
      dse4ThCl: Number,
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
    ],
  },
});

module.exports = mongoose.models.User;

module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
