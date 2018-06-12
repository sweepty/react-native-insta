var express = require('express');
var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {
  //전체 글 가져오기
  router.get('/', asyncError(async (req, res, next) => {
    const posts = await db.Post.findAll({
      required: true,
      // order: '"updatedAt" DESC',
      include: [{
        model: db.User,
        // required: true,
        attributes: ['id', 'username'],
        
      }]
    });
    res.json(posts);
  }));
 
  //글 올리기
  router.post('/:id', asyncError(async (req, res, next) => {
    const user_id = req.params.id;
    db.Post.create({
      userId: user_id,
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
  // 내가 쓴 글만 가져오기
  router.get('/me/:id', asyncError(async (req, res, next) => {
    const user_id = req.params.id;
    const myposts = await db.User.findAll({
      where: [{id: user_id}],
      attributes: ['id', 'username'],
      // order: [['updatedAt', 'DESC']],
      include: [{
        model: db.Post,
        required: true,
        order: 'createdAt DESC',
        // order: [["createdAt", "DESC"]],
      }]
    });
    res.json(myposts);
  }));
  
  return router;

}