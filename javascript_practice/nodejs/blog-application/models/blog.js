const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true
    },
  }, { timestamps: true });
  
  // Blog name is important. Here it looks for a collection with name "blogs"
  // Here you gave Blogs but it converts that to plural form by adding s at the end.
  const Blog = mongoose.model('Blog', blogSchema);
  module.exports = Blog;