const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const data = [
  { id: 1, text: "aaa" },
  { id: 2, text: "bbb" },
];

app.get("/data", (req, res) => {
  res.send(JSON.stringify(data));
});

app.listen(5000, () => {
  console.log("Server Started");
});
