let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Create a schema for our data

let articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { collection: "dataArticles" }
);

module.exports = mongoose.model("Article", articleSchema);
