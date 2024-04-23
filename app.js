const express = require("express");

const app = express();

const port = 3000;

app.get("/ayomikun", (req, res) => {
  res.send("Hello Ayomikun from GET request");
});

app.post("/ayomikun", (req, res) => {
  res.send("Hello Ayomikun from POST request");
});

app.put("/ayomikun", (req, res) => {
  res.send("Hello Ayomikun from PUT request");
});

app.patch("/ayomikun", (req, res) => {
  res.send("Hello Ayomikun from PATCH request");
});

app.delete("/ayomikun", (req, res) => {
  res.send("Hello Ayomikun from DELETE request");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
