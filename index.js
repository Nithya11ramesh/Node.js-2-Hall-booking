import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/booking.js";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); // we can restrict who can access the API.


app.use("/hall-api", bookingRoutes);

app.listen(PORT);