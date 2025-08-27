const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

// MongoDB connection
const mongoURI =
  "mongodb+srv://actionchaudhari9090:Jonatx9090@cluster0.du0xqw8.mongodb.net/Project101";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Middlewares
app.use(
  cors({
    origin: ["https://bootstrap-js-zvv5.onrender.com"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
