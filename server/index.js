require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/auth.js");

const app = express();
connectDB();

app.get("/", (req, res) => res.send("CipherSchools server is running!"));
// app.use("/users", userRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
