import express from 'express';
import db from '../database.js';

const router = express.Router();

router.get('/:username', (req, res) => {
  const { username } = req.params;

  db.all('SELECT * FROM orders WHERE username = ?', [username], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      const orders = rows.map(row => ({
        ...row,
        items: JSON.parse(row.items)
      }));
      res.json(orders);
    }
  });
});


router.get('/latest/:username', (req, res) => {
  const { username } = req.params;

  db.get('SELECT * FROM orders WHERE username = ? ORDER BY created_at DESC LIMIT 1', [username], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      if (row) {
        row.items = JSON.parse(row.items);
      }
      res.json(row);
    }
  });
});


export default router;
