const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    coverImageURL: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId, // Corrected to specify ObjectId type
      ref: "user", // Ensure that the referenced model name is correct (case-sensitive)
    },
   
  },
  { timestamps: true }
);

const Blog = model("Blog", blogSchema);

module.exports = Blog;
