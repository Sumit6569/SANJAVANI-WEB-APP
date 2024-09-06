const { Schema, model } = require("mongoose");

const commentShcema = new Schema({
  content: {
    type: String,
    required: true,
  },
  blogId: {
    type: Schema.Types.ObjectId,
    ref: "blog",
  },
  createdBy: {
    type: Schema.Types.ObjectId, // Corrected to specify ObjectId type
    ref: "user", // Ensure that the referenced model name is correct (case-sensitive)
  },
},{timestamps:true});



const Comment = model("comment", commentShcema);

module.exports = Comment;

