import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

//GET
app.get("/", (req, res) => {
  const data = {};
  // Hier wird das aktuelle Datum erzeugt und dem Datenobjekt hinzugefügt
  const currentDate = new Date();
  data.currentDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;

  res.render("index.ejs", data);
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
  //Do something with the data
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
