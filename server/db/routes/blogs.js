const express = require("express");
const router = express.Router();
const db = require("../models/index");


router.get("/", (req, res) => {
  db.Blog
    .findAll()
    .then(blogs => {
      res.status(200).json(blogs);
    }).catch(error => {
      res.status(400).send("bad get");
    })
});

router.get("/featured", (req, res) => {
  db.Blog
  .findAll({
    where: {
      featured: true
    }})
  .then(blogs => {
      res.status(200).send(blogs);
  })
  .catch(err => res.status(500).send("help"));
});


router.get("/:id", (req, res) => {
  db.Blog
  .findById(req.params.id)
  .then(blog => {
      if(!blog) {
        res.status(404).send();
      } else {
      res.status(200).json(blog);
      }
  })
  .catch(err => res.status(500).send("bad"));
});


router.post("/", (req, res) => {
  db.Blog
    .create({
      authorId: req.query.authorId,
      title: req.body.title,
      article: req.body.article,
      published: req.body.published,
      featured: req.body.featured
    })
    .then(blogs => {
      res.status(201).json(blogs);
    })
    .catch(error => {
      res.status(500).send("bad post");
    })
})

router.put("/:id", (req, res) => {
  var authorId = req.params.id;
  db.Blog
    .update({
      title: req.body.title,
      article: req.body.title,
      published: req.body.published,
      featured: req.body.featured,
    },
    {
      where: {
        id: authorId
      }
    })
    .then(blogs => {
      res.status(204).json(blogs);
    })
})

router.delete("/:id", (req, res) => {
  db.Blog
    .findById(req.params.id)
    .then(blogs => {
      blogs.destroy()
        .then(blog => {
          res.status(200).json(blog);
        })
        .catch(error => {
          res.status(500).send();
        })
    })
})



module.exports = router;
