const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const data = [
  { id: 1, text: "aaa" },
  { id: 2, text: "bbb" },
  { id: 3, text: "ccc" },
];

app.get("/data", (req, res) => {
  res.send(JSON.stringify(data));
});

app.get("/sayHello", (req, res) => {
    res.send("Hello all!");
  });
  

app.listen(5000, () => {
  console.log("Server Started");
});
