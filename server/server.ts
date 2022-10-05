import express from "express";
import { router } from "./routes/rating.routes";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
