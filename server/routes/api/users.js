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

  //내 프로필 정보 가져오기
  router.get('/myprofile', asyncError(async (req, res, next) => {
    // console.log(req,"아이디를 찾아요")
    const profile = await db.Profile.findAll({
      where: { userId: 2 }
    })
    res.json(profile);
  }));

  //프로필 등록
  router.post('/myprofile', (req, res, next) => {
    db.Profile.create({
      userId: 2,
      name: req.body.name,
      intro: req.body.intro,
      myUrl: req.body.myurl
    }).then( profile => {
      res.json(profile.toJSON());
    }).catch( error => {
      console.log(err,'에러닷')
      // if (error.name == 'SequelizeUniqueConstraintError') {
      //   return res.status(422).json({code: 101, message: 'username exists'});
      // }
      next(error);
    });
  });
  // //프로필 수정
  // router.put('/myprofile', (req, res, next) => {
  //   db.Profile.create({
  //     userId: 2,
  //     name: req.body.name,
  //     intro: req.body.intro,
  //     myUrl: req.body.myurl
  //   }).then( profile => {
  //     res.json(profile.toJSON());
  //   }).catch( error => {
  //     console.log(err,'에러닷')
  //     // if (error.name == 'SequelizeUniqueConstraintError') {
  //     //   return res.status(422).json({code: 101, message: 'username exists'});
  //     // }
  //     next(error);
  //   });
  // });
  // 내 글
  router.get('/me', (req, res) => {
    console.log(req,"아이디를 찾아요")
    // console.log(this.props,"아이디있나오?")
    // const profile = db.User.findAll({
    //   attributes: [['content', 'image'], 'username'],
    //   include: [{
    //     model: db.Post,
    //     where: { userId: 2 }, //아이디가 2인거
    //     attributes: ['userId', 'content', 'image', 'createdAt']
    //   }]
    // })
    const profile = db.Post.findAll({where: { id: 2 }})
    res.json(profile);
  });
  router.get('/', asyncError(async (req, res, next) => {
    // console.log(req.params.id,"아이디를 찾아요")
    // const users = await db.User.findAll({where: {username: "adie"}});
    const users = await db.User.findAll({});
    res.json(users);
  }));
  
  return router;

}