import express, { Application, Request, Response } from "express";
const cors = require("cors");
const dotEnv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const authMiddleware = require("./middleware/authMiddleware");

dotEnv.config();
connectDB();
const app: Application = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(authMiddleware); // This applies the middleware to all routes
// Routes
app.use('/api/users', userRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
