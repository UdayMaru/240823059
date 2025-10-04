const express = require("express");
const sqeualize = require("sequelize");

const studentRoute = require("./route/studentRoute");
const app = express();
const PORT = 81;
app.use(express.json());
app.use("/student",studentRoute);

app.listen(PORT,()=>{
    console.log("server is running :127.0.0.1:"+PORT);
});

