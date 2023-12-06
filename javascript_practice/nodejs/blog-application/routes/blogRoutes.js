const express=require("express")
const Blog = require("../models/blog.js");
const blogController = require('../controllers/blogController');


const router =express.Router()

router.get("/", blogController.blog_index);
  
  // Get the post request from form and save it to database
  router.post('/', blogController.blog_create_post);

  //Create a new blog
  router.get("/create", blogController.blog_create_get);

  //Details by id
  router.get("/:id",blogController.blog_details)
  
  //Delete the blog
  router.delete('/:id', blogController.blog_delete);

  module.exports = router;
  
