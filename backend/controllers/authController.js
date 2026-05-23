const db = require("../db");

// SIGNUP
const signup = (req, res) => {

  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        message: "Signup Failed",
      });

    }

    res.json({
      message: "Signup Success",
    });

  });
};

// LOGIN
const login = (req, res) => {

  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {

    if (err) {

      console.log(err);

      return res.status(500).json({
        message: "Login Failed",
      });

    }

    if (result.length > 0) {

      res.json({
        success: true,
        user: result[0],
      });

    } else {

      res.json({
        success: false,
        message: "Invalid Email or Password",
      });

    }

  });
};

// SAVE HISTORY
const saveHistory = (req, res) => {

  const { userId, calculation } = req.body;

  console.log("BODY:", req.body);

  const sql =
    "INSERT INTO history (user_id, calculation) VALUES (?, ?)";

  db.query(sql, [userId, calculation], (err, result) => {

    if (err) {

      console.log("SAVE ERROR:", err);

      return res.status(500).json({
        message: "History Save Failed",
      });

    }

    res.json({
      message: "History Saved",
    });

  });
};

// GET HISTORY
const getHistory = (req, res) => {

  const { userId } = req.params;

  const sql =
    "SELECT * FROM history WHERE user_id=? ORDER BY id DESC";

  db.query(sql, [userId], (err, result) => {

    if (err) {

      console.log("FETCH ERROR:", err);

      return res.status(500).json({
        message: "Fetch Failed",
      });

    }

    res.json(result);

  });
};

module.exports = {
  signup,
  login,
  saveHistory,
  getHistory,
};