const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB Connected Successfully.");
    })
    .catch((error) => {
        console.log(error);
    })
}

module.exports = databaseConnection;