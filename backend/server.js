const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World from Backend 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
