const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes=require("./routes/blogRoutes.js")

// express app
const app = express();

const dbURL =
  "mongodb://bhuvan:bhuvan@localhost:27017/node_tuts?authMechanism=DEFAULT";
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    // We want to start server after the database connection is successful
    // listen for requests
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

// register view engine
// By default it will look for views in ./views folder, if want to specify other location use below property
// app.set('views', 'myviews');
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
// This is to used to read form data and convert it into java script object
// In general this will be used to convert data received vai anty rest call to js object
app.use(express.urlencoded({ extended: true }));


// app.use() gets executed for every request
// if this sends any response to client then rest of the code won`t execut
// so we need to say explicitly execute next statements using next as shwon here
app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

//   app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
//   });

// This is used for logging purpose
app.use(morgan("dev"));

//sand-box testing
// We want to create a dummy data(in the database) when get request comes to below url
// we should also show that on the web

/*
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "new snippet",
    body: "body",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
*/

// To see the contents from the mongodb
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("./blogs/about", { title: "About" });
});

// all blog controllers we be imported here
app.use("/blogs",blogRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
