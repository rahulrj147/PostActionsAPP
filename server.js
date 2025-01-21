const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 400 

app.listen(PORT,()=>{
    console.log(`server start sucessfully at port ${PORT}`);
})

app.use(express.json());

const Blogs = require("./routes/Blogs");
app.use("/v1" , Blogs);


const dbconnection = require("./config/database");
dbconnection();