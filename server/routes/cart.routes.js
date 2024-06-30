import express from 'express';
import db from '../database.js';

const router = express.Router();

// Add
router.post('/add-cart-item', (req, res) => {
  const { username, design, type, qty } = req.body;
  db.run('INSERT INTO cart (username, design, type, qty) VALUES (?, ?, ?, ?)', [username, design, type, qty], function(err) {
    if (err) {
      res.status(500).json({ error: 'Failed to add cart item' });
    } else {
      res.status(200).json({ id: this.lastID });
    }
  });
});

// Get
router.get('/cart-items/:username', (req, res) => {
  const username = req.params.username;
  db.all('SELECT * FROM cart WHERE username = ?', [username], (err, rows) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch cart items' });
    } else {
      res.status(200).json(rows);
    }
  });
});

// Remove
router.delete('/remove-cart-item/:id', (req, res) => {
  const id = req.params.id;

  db.run('DELETE FROM cart WHERE id = ?', [id], function (err) {
    if (err) {
      console.error('Error removing cart item:', err);
      res.status(500).json({ message: 'Error removing cart item' });
    } else {
      res.status(200).json({ message: 'Cart item removed successfully' });
    }
  });
});

// Update
router.put('/update-qty/:id', (req, res) => {
  const id = req.params.id;
  const { qty } = req.body;

  if (qty === 0) {
    db.run('DELETE FROM cart WHERE id = ?', [id], function (err) {
      if (err) {
        console.error('Error removing cart item:', err);
        res.status(500).json({ message: 'Error removing cart item' });
      } else {
        res.status(200).json({ message: 'Cart item removed successfully' });
      }
    });
  } else {
    db.run('UPDATE cart SET qty = ? WHERE id = ?', [qty, id], function (err) {
      if (err) {
        console.error('Error updating cart item:', err);
        res.status(500).json({ message: 'Error updating cart item' });
      } else {
        res.status(200).json({ message: 'Cart item updated successfully' });
      }
    });
  }
});

router.put('/update-size/:id', (req, res) => {
  const id = req.params.id;
  const { size } = req.body;
    db.run('UPDATE cart SET size = ? WHERE id = ?', [size, id], function (err) {
      if (err) {
        console.error('Error updating cart item:', err);
        res.status(500).json({ message: 'Error updating cart item' });
      } else {
        res.status(200).json({ message: 'Cart item updated successfully' });
      }
    });
});

// Clear cart
router.delete('/clear-cart/:username', (req, res) => {
  const username = req.params.username;

  db.run('DELETE FROM cart WHERE username = ?', [username], function (err) {
    if (err) {
      console.error('Error clearing cart:', err);
      res.status(500).json({ message: 'Error clearing cart' });
    } else {
      res.status(200).json({ message: 'Cart cleared successfully' });
    }
  });
});

export default router;