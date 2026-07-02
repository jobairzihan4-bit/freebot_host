import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { startBot } from './bot.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, 'public')));

// Start Telegram Bot
startBot();

// Start Express Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Web Server is running on port ${PORT}`);
});
