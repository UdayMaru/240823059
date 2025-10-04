const express = require("express");
const mongoose= require("mongoose");

const studentRoute=require("./studentroute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect("mongodb+srv://maruuday3_db_user:Ahir0007@mca.orgmzel.mongodb.net/?retryWrites=true&w=majority&appName=MCA",
   
);

app.use("/song",studentRoute);
app.listen(PORT,()=>{
    console.log("server is running:localhost:"+PORT);
});