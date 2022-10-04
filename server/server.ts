import express from "express";
import { router } from "./routes/rating.routes";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
