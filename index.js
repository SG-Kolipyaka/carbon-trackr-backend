const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./db");
const { carbonRouter } = require("./routes/carbonRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/carbon", carbonRouter); // Add this line

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log("Database connection error:", error);
    }
    console.log(`Server running at ${process.env.PORT}`);
});
