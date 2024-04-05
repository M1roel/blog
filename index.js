import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Middleware zum Verarbeiten von Formulardaten

let blogposts = [];

//GET
app.get("/", (req, res) => {
  res.render("index.ejs", { blogposts });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/categories", (req, res) => {
  res.render("categories.ejs");
});

//POST
app.post("/blog", (req, res) => {
  const { title, content } = req.body;
  const currentDate = new Date(); // Aktuelles Datum
  const newBlogpost = { title, content, date: currentDate }; // Blogpost-Datensatz
  blogposts.push(newBlogpost); // Blogpost zum Array hinzufügen
  res.redirect("/"); // Umleitung zur Homepage
  res.sendStatus(201);
});

//PUT
app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

//PATCH
app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

//DELETE
app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

//LISTEN
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
