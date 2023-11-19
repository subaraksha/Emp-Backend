const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Employee } = require("../models/employee");

// => localhost:3000/employees/
router.get("/", (req, res) => {
  Employee.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Employee.findById(req.params.id)
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/", (req, res) => {
  var emp = new Employee({
    name: req.body.name,
    id: req.body.id,
    subject: req.body.subject,
    description: req.body.description,
  });
  emp
    .save()
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var emp = {
    name: req.body.name,
    id: req.body.id,
    subject: req.body.subject,
    description: req.body.description,
  };
  Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true })
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Employee.findByIdAndDelete(req.params.id)
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
