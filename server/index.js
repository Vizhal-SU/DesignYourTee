import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// import dalleRoutes from './routes/dalle.routes.js';
import diffusionRoutes from './routes/diffusion.routes.js'
import authRoutes from './routes/auth.routes.js';
import cartRoutes from './routes/cart.routes.js';
import stripeRoutes from './routes/stripe.routes.js';
import orderRoutes from './routes/orders.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/diffusion", diffusionRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/stripe", stripeRoutes);
app.use('/api/v1/orders', orderRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(8000, () => console.log('Server has started on port 8000'));
