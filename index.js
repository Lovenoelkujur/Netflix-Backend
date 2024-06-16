const express = require("express");
const dotenv = require("dotenv");
const databaseConnection = require("./utils/database");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");

const app = express();

dotenv.config();

databaseConnection();

const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

// API
app.use("/api/v1/user", userRoute);

app.listen(port, () => {
    console.log(`Server is up and running at port : ${port}`);
})
