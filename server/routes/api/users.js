var express = require('express');
var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {

  router.post('/', asyncError(async (req, res, next) => {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then( user => {
      res.json(user.toJSON());
    }).catch( error => {
      if (error.name == 'SequelizeUniqueConstraintError') {
        return res.status(422).json({code: 101, message: 'username exists'});
      }
      next(error);
    });
  }));

  router.use(app.oauth.authenticate());
  // router.get('/', asyncError(async (req, res, next) => {
  //   const users = await db.User.findAll({});
  //   res.json(users);
  // }));

  // router.use('/me', asyncError(async (req, res) => {
  //   // console.log(req.locals.user,"내 정보ㅗㅗㅗㅗㅗ");
  //   // const user = await db.User.findOne({where: {username: req.locals.user.username}});
  //   // const user = await db.User.findOne({where: {username: "adie"}});
  //   console.log(user,"유저입니당")
  //   res.json(user);
  // }));
  // return router;
  router.get('/me', (req, res) => {
    res.json(req.locals.user);
  });
  router.get('/', asyncError(async (req, res, next) => {
    const users = await db.User.findAll({});
    res.json(users);
  }));
  
  return router;

}