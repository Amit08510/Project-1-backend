require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(cors({
    origin: ["https://bootstrap-js-zvv5.onrender.com", "https://project-1-backend-cgpd.onrender.com"],
    credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

