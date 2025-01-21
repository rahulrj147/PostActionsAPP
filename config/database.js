const mongoose = require("mongoose");
require("dotenv").config();

const dbconnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("batabase connected"))
    .catch((e) => {
        console.log("some error in database connection");
        process.exit(1);
    });
};
module.exports = dbconnection;
