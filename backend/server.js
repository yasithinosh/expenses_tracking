import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import transactionsRoute from "./routes/transactionsRoute.js";
dotenv.config();

const app = express();

//middleware
app.use(express.json());
//custom simple middleware
// app.use((req, res, next) => {
//     console.log("Hey we hit a req, the method is ",req.method)
//     next()
// })

const PORT = process.env.PORT || 5001;

async function initDB() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;

        console.log("Database initialized successfully");
    } catch (error) {
        console.log("Error initializing DB:", error);
        process.exit(1); // Exit the process with failure
    }
}

app.get("/", (req, res) => {
    res.send("Its working...");
});

app.use("/api/transactions", transactionsRoute);


initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on PORT:", PORT);
    });
});