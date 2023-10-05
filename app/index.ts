import express from "express";

const app = express();

app.listen(4002, () => {
  console.log("connected!");
});

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "hello",
  });
});
