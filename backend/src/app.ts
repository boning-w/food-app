import express from "express";
import cors from "cors";
import { PORT } from "./configs";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Hello world!" });
});

app.get("/api/test", (_req, res) => {
  res.send("Test!");
});

app.listen(PORT, () => console.log(`🚀 Server ready at: ${PORT} port`));
