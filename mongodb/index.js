const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://maruuday3_db_user:Ahir0007@mca.orgmzel.mongodb.net/?retryWrites=true&w=majority&appName=MCA",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const studentSchema=new mongoose.Schema({
    name:String,
    department:String,
    startYear:Number,
    endYear:Number,
    enrollmentNo:Number,
    address:String,
});

const Student=mongoose.model("Student",studentSchema);

console.log("MongoDB connected successfully");

const student = new Student({
    name: "Uday Maru",
    department: "Computer Science",
    startYear: 2020,
    endYear: 2024,
    enrollmentNo: 240823059,
    address: "Dwarka",
});

student.save().then(() => {console.log("Student saved successfully");
})
.catch((err) => {console.error("Error saving student:",error);
});