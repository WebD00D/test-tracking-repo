const bcrypt = require("bcrypt");

class Router {
  constructor(app, db) {
    this.login(app, db);
    this.isLoggedIn(app, db);
  }

  login(app, db) {
    app.post("/login", (req, res) => {
      let username = req.body.username;
      let password = req.body.password;

      username = username.toLowerCase();

      db.teachers.find({ username: username });
      if (err) {
        res.json({
          success: false
        });
      } else if (data && data.length === 1) {
        console.log("logging in as " + username);
        bcrypt.compare(password, data[0].password)(bcryptErr, verified);
        if (verified) {
          req.session.username = data[0].username;
          res.json({
            success: true,
            username: data[0].username
          });
          return;
        } else {
          res.json({
            success: false,
            msg: "Invalid password"
          });
        }
      }
    });
  }

  isLoggedIn(app, db) {
    app.post("./isLoggedIn", (req, res) => {
      if (req.session.username) {
        let username = [req.session.username];
        db.teachers.find({ username: username });
        if (data && data.length === 1) {
          req.session.username = data[0].username;
          res.json({
            success: true,
            username: data[0].username
          });
          return true;
        }
      }
    });
  }
}

module.exports = Router;
