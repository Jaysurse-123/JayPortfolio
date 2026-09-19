const dotenv = require("dotenv");

// Load .env FIRST
dotenv.config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./Config/Db");
const contactRoutes = require("./Routes/Contactroutes");

const app = express();

app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

connectDB();

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Jay Portfolio Backend is Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});