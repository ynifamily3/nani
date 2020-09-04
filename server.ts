import express from "express";

const app = express();
const PORT = 5000;

app.get("/data", (req, res) => {
  const data = {
    lastname: "Choi",
    firstname: "Miel",
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
