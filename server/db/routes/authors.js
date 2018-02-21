const express = require("express");
const router = express.Router();
const db = require("../models/index");


router.get("/", (req, res) => {
  db.Author
    .findAll()
    .then(authors => {
      res.status(200).json(authors);
    }).catch(error => {
      res.status(400).send();
    })
});

router.get("/:id", (req, res) => {
  db.Author
    .findById(req.params.id)
    .then(authors => {
      if (!authors) res.status(404).send();
      res.status(200).json(authors);
    }).catch(error => {
      res.status(404).send();
    })
});

router.get("/:id/blogs", (req, res) => {
  db.Blog
    .findAll({
      where: {
        authorId: req.params.id
        } 
    })
    .then(blogs => {
      res.status(200).json(blogs);
    }).catch(error => {
      res.status(404).send()
    })
});

router.post("/", (req, res) => {
  db.Author
  .create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,

  })
  .then(authors => {
    res.status(201).json(authors);
  })
  .catch(error => {
    res.status(400).send(error);
  })
})

router.put("/:id", (req, res) => {
  db.Author
  .build({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
  .save()
  .then(authors => {
    res.status(204).json(authors);
  })
  .catch(error => {
    res.status(400).send(error);
  })
})

router.delete("/:id", (req, res) => {
  db.Author
  .destroy({
    where: {
      id: req.params.id}})
  .then(authors => {
    res.status(200).json(authors);
  })
  .catch(error => {
    res.status(400).send(error);
  })
})



module.exports = router;