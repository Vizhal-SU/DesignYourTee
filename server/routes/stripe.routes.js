import express from 'express';
import Stripe from 'stripe';
import db from '../database.js';
import * as dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'inr',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save order details
router.post('/save', (req, res) => {
  const { username, address, city, state, zipCode, items } = req.body;

  const stmt = db.prepare('INSERT INTO orders (username, address, city, state, zipCode, items) VALUES (?, ?, ?, ?, ?, ?)');
  stmt.run(username, address, city, state, zipCode, items, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'Order saved successfully' });
    }
  });
});

export default router;
