const mongoose = require("mongoose");

const PictureSchema = mongoose.Schema(
  {
    picture: String,
    category: String
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
PictureSchema.virtual("picture_url").get(function() {
  return `/files/${this.picture}`;
});
module.exports = mongoose.model("Pictures", PictureSchema);
