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

console.log("Mongodb connected successfully");

Student.find()
    .then((allstudent) =>{
        console.log("All student retriveved successfully:",allstudent);
    })
    .catch((error) =>{
        console.error("Error retriveing student:",error);
    });

    Student.find({department:"Computer Science"})
    .then((allstudent) =>{
        console.log("All student retriveved successfully:",allstudent);
    })
    .catch((error) =>{
        console.error("Error retriveing student:",error);
    });

//const student = new Student({
//    name: "Uday Maru",
//    department: "Computer Science",
//    startYear: 2020,
//    endYear: 2024,
//    enrollmentNo: 240823059,
//    address: "Dwarka",
//});

const student = new Student({
    name: "Ravi Pithadiya",
    department: "Computer Science",
    startYear: 2020,
    endYear: 2024,
    enrollmentNo: 240823068,
    address: "Rajkot",
});

student.save().then(() => {console.log("Student saved successfully");
})
.catch((error) => {console.error("Error saving student:",error);
});

