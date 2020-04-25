/* ROUTES */
var passport = require('passport');
var Teacher = require('./models/teacher.js');

module.exports = function (app) {

  app.get('/', function (req, res) {
      res.render('index', { user : req.user });
  });

  // app.get('/register', function(req, res) {
  //     res.render('register', { });
  // });

  // app.post('/register', function(req, res) {
  //   Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
  //       if (err) {
  //           return res.render('register', { account : account });
  //       }

  //       passport.authenticate('local')(req, res, function () {
  //         res.redirect('/');
  //       });
  //   });
  // });

  app.get('/login', function(req, res) {
      res.render('login', { user : req.user });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/dashboard');
  });

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

  app.get('/ping', function(req, res){
      res.send("pong!", 200);
  });

};
// const connectEnsureLogin = require('connect-ensure-login');

// app.post('/login', (req, res, next) => {
//   passport.authenticate('local',
//   (err, user, info) => {
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       return res.redirect('/login?info=' + info);
//     }

//     req.logIn(user, function(err) {
//       if (err) {
//         return next(err);
//       }

//       return res.redirect('/');
//     });

//   })(req, res, next);
// });

// // this will need to change after the build, right???
// app.get('/',
//   (req, res) => res.sendFile('../client/build/index.html',
//   { root: __dirname })
// );

// app.get('/dashboard',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.sendFile('../client/build/dashboard.html', {root: __dirname})
// );

