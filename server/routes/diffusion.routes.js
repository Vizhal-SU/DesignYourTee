import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import { Buffer } from 'buffer';

dotenv.config();

const router = express.Router();
const HF_API_KEY = process.env.HF_API_KEY;

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from Stable Diffusion ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log('Prompt:', prompt);

    const response = await fetch(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3-medium-diffusers',
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
        method: 'POST',
        body: JSON.stringify({ inputs: prompt }),
        num_inference_steps: 50000,
        height: 12,
        width: 5,
      }
    );

    if (!response.ok) {
      throw new Error(`Hugging Face API returned an error: ${response.statusText}`);
    }

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert buffer to base64
    const base64data = buffer.toString('base64');

    res.status(200).json({ photo: base64data });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ message: "Service Unavailable", error: error.message });
  }
});

export default router;
