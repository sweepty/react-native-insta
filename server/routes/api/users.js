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
  router.get('/myprofile/:id', asyncError(async (req, res, next) => {
    const user_id = req.params.id;
    const profile = await db.User.findOne({
      where: { username: user_id },
      include: [{
        model: db.Profile
      }]
    })
    res.json(profile);
  }));

  //프로필 등록
  router.post('/myprofile/:id', (req, res, next) => {
    const user_id = req.params.id;
    db.Profile.create({
      userId: user_id,
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
    const profile = db.Post.findAll({where: { id: 2 }})
    res.json(profile);
  });
  //내 정보 -- 왜 두개나오냐
  router.get('/:id', asyncError(async (req, res ) => {
    const usrname = req.params.id;
    console.log(usrname,"확인")
    const users = await db.User.findOne({where:{username: usrname}});
    res.json(users);
  }));
  
  return router;

}