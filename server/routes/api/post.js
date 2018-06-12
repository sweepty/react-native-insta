var express = require('express');
var db = require('../../models');
var router = express.Router();

module.exports = function(app) {
  //전체 글 가져오기
  router.get('/post', asyncError(async (req, res, next) => {
    const posts = await db.Posts.findAll({});
    res.json(posts);
  }));
 
  //글 올리기
  router.post('/post', asyncError(async (req, res, next) => {
    console.log(req.body,"아이디이이이이ㅣㅇ")
    db.Posts.create({
      userId: 2,
      content: req.body.content,
      image: req.body.image
    }).then( post => {
      res.json(post.toJSON());
    }).catch( error => {
      if (error.name == 'SequelizeUniqueConstraintError') {
        return res.status(422).json({code: 101, message: 'username exists'});
      }
      next(error);
    });
  }));

  router.get('/post/me', (req, res) => {
    res.json(req.locals.user);
  });
  
  return router;

}