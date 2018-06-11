var express = require('express');
var db = require('../../models');
var router = express.Router();

module.exports = function(app) {

  router.post('/', asyncError(async (req, res, next) => {
    db.Posts.create({
      userId: req.locals.user.id,
      content: req.body.content
    }).then( post => {
      res.json(post.toJSON());
    }).catch( error => {
      next(error);
    });
  }));

  router.use(app.oauth.authenticate());
  router.get('/me', (req, res) => {
    res.json(req.locals.user);
  });
  router.get('/', asyncError(async (req, res, next) => {
    const posts = await db.Posts.findAll({});
    res.json(posts);
  }));
  
  return router;

}