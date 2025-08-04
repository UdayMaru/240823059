const express = require("express");
const app = express();
const PORT = 80;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("JAY DWARKADHISH\n");
});

app.get("/show/:id", (req, res) => {
    res.send(`hello,Students\nID: ${req.params.id} `);
});

app.post("/store", (req, res) => {
    res.send(`successfully stored record!\n ${req.body.name}, ${req.body.city}`);
});

app.put("/update/:id", (req, res) => {
    res.send(`successfully updated record with ID: ${req.params.id}, Name: ${req.body.name}, City: ${req.body.city}`);
});

app.delete("/delete/:id", (req, res) => {
    res.send(`successfully deleted record with ID: ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});