import express from 'express';
import db from '../database.js';

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from auth" });
});

// Register user
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (row) {
      res.status(400).json({ message: 'Username already exists' });
    } else {
      db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err) {
        if (err) {
          res.status(500).json({ message: 'Error registering user' });
        } else {
          res.status(200).json({ message: 'User registered successfully' });
        }
      });
    }
  });
});

// Login user
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (row) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(400).json({ message: 'Invalid username or password' });
    }
  });
});

// Get all users
router.get('/users', (req, res) => {
  db.all('SELECT username, password FROM users', [], (err, rows) => {
    if (err) {
      res.status(500).json({ message: 'Error retrieving users' });
    } else {
      res.status(200).json(rows);
    }
  });
});

export default router;
