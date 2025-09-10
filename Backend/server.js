import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userroutes.js';
import 'dotenv/config.js'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.static("public")); // Serves files from 'public' directly
app.use("/public", express.static("public")); // Serves files when accessing '/public' in the URL
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

connectDB();

// api routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
