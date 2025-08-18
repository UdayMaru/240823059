const express = require("express");
const Router = express.Router();
const studentsController = require("../controllers/studentsController");
const {
  createValidator,
  updateValidator,
  validate,

}= require("../validators/studentValidators");



Router.get("/index", studentsController.index);
Router.get("/show/:id", studentsController.show);
Router.post("/store", (req, res, next) => {
  const result = validate(createValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }

  studentsController.store(req, res, next);
});
Router.put("/update/:id", (req, res, next) => {
  const result = validate(updateValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }
   next();
}, studentsController.update);
Router.delete("/delete/:id", studentsController.delete);

module.exports = Router;


