import app from './app.js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default function handler(req, res) {
  app(req, res);
}
