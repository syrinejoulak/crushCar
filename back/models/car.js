const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comments: [
    {
      comment: String,
      postedBy: { type: ObjectId, ref: "User" },
      name: String,
    },
  ],
});

module.exports = mongoose.model("Car", carSchema);
