let express = require("express");
const article = require("../models/article");
let Article = require("../models/article");

let articleRouter = express.Router();

// Create router which contains all requests for our API, such as GET, POST, PUT, and DELETE

articleRouter
  .route("/articles")
  .post((req, res) => {
    console.log("POST /articles");

    let article = new Article(req.body);

    article.save();

    res.status(201).send(article);
  })
  .get((req, res) => {
    console.log("GET /articles");

    Article.find((err, articles) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.json(articles);
    });
  });

// Use a dynamic url (:articleId) to handle specific operations, like PUT or DELETE

articleRouter
  .route("/articles/:articleId")
  .get((req, res) => {
    console.log("GET /article/:articleId");

    let articleId = req.params.articleId;

    Article.findOne({ _id: articleId }, (err, article) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.json(article);
    });
  })
  .put((req, res) => {
    console.log("PUT /articles/:articleId");

    let articleId = req.params.articleId;

    Article.findOne({ _id: articleId }, (err, article) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      if (article) {
        article.title = req.body.title;
        article.text = req.body.text;

        article.save();

        res.json(article);

        return;
      }

      response.status(404).json({
        message: `Item with id ${itemId} was not found.`,
      });
    });
  })
  .delete((req, res) => {
    console.log("DELETE /articles/:articleId");

    let articleId = req.params.articleId;

    Article.findOne({ _id: articleId }, (err, article) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      if (article) {
        article.remove((err) => {
          if (err) {
            res.status(500).send(err);
            return;
          }

          res
            .status(200)
            .json({ message: `Article with id ${articleId} was deleted` });
        });
      } else {
        res
          .status(404)
          .json({ message: `Article with id ${articleId} was not found` });
      }
    });
  });

module.exports = articleRouter;
