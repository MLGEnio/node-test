import express, { Application, Request, Response } from "express";
const cors = require("cors");
const app: Application = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.json({ user: ["user13", "user2"] });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
